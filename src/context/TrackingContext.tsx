import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import Geolocation from '@react-native-community/geolocation';
import haversine from 'haversine';

// Definir o tipo para o contexto
interface TrackingContextProps {
  distance: number;
  time: number;
  averagePace: string;
  isTracking: boolean;
  startTracking: () => void;
  stopTracking: () => void;
}

// Criar o contexto
const TrackingContext = createContext<TrackingContextProps | undefined>(undefined);

// Hook para acessar o contexto
export const useTrackingContext = () => {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error('useTrackingContext must be used within a TrackingProvider');
  }
  return context;
};

// Definir as propriedades que o TrackingProvider pode aceitar
interface TrackingProviderProps {
  children: ReactNode; // Adicionar children do tipo ReactNode
}

export const TrackingProvider: React.FC<TrackingProviderProps> = ({ children }) => {
  const [distance, setDistance] = useState(0); // Distância em km
  const [time, setTime] = useState(0); // Tempo em segundos
  const [averagePace, setAveragePace] = useState('00:00'); // Ritmo médio
  const [isTracking, setIsTracking] = useState(false); // Estado de rastreamento

  const startTimeRef = useRef<Date | null>(null); // Referência para tempo de início
  const prevLocationRef = useRef<{ latitude: number; longitude: number } | null>(null); // Localização anterior

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isTracking) {
      startTimeRef.current = new Date();
      interval = setInterval(() => {
        setTime((prev) => prev + 1); // Atualiza o tempo de forma contínua
      }, 1000); // A cada segundo, o tempo será incrementado

      const watchId = Geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentLocation = { latitude, longitude };

          if (prevLocationRef.current) {
            const distanceBetweenPoints = haversine(
              prevLocationRef.current,
              currentLocation,
              { unit: 'km' }
            );
            setDistance((prev) => prev + distanceBetweenPoints); // Calcula a distância com base na nova posição
          }

          prevLocationRef.current = currentLocation;
        },
        (error) => {
          console.error('Erro no monitoramento:', error);
        },
        { enableHighAccuracy: true, distanceFilter: 1 }
      );

      return () => {
        if (interval) clearInterval(interval); // Limpa o intervalo quando o rastreamento for parado
        Geolocation.clearWatch(watchId);
      };
    } else if (interval) {
      clearInterval(interval);
    }
  }, [isTracking]);

  useEffect(() => {
    if (time > 0 && distance > 0) {
      const pace = time / (distance * 60); // Ritmo em minutos por km
      const minutes = Math.floor(pace);
      const seconds = Math.floor((pace - minutes) * 60);
      setAveragePace(
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    }
  }, [time, distance]); // O cálculo do ritmo depende tanto do tempo quanto da distância

  const startTracking = () => {
    setDistance(0);
    setTime(0);
    setAveragePace('00:00');
    prevLocationRef.current = null;
    setIsTracking(true);
  };

  const stopTracking = () => {
    setIsTracking(false);
  };

  return (
  <TrackingContext.Provider
    value={{
      distance,
      time,
      averagePace,
      isTracking,
      startTracking,
      stopTracking,
    }}
  >
    {children}
  </TrackingContext.Provider>
  );
};
