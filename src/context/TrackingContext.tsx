import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import Geolocation from '@react-native-community/geolocation';
import haversine from 'haversine';

interface TrackingContextProps {
  distance: number;
  time: number;
  averagePace: string;
  isTracking: boolean;
  startTracking: () => void;
  stopTracking: () => void;
}

const TrackingContext = createContext<TrackingContextProps | undefined>(undefined);

export const useTrackingContext = () => {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error('useTrackingContext must be used within a TrackingProvider');
  }
  return context;
};

interface TrackingProviderProps {
  children: ReactNode;
}

export const TrackingProvider: React.FC<TrackingProviderProps> = ({ children }) => {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [averagePace, setAveragePace] = useState('00:00');
  const [isTracking, setIsTracking] = useState(false);

  const startTimeRef = useRef<Date | null>(null);
  const prevLocationRef = useRef<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isTracking) {
      startTimeRef.current = new Date();
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

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
            setDistance((prev) => prev + distanceBetweenPoints);
          }

          prevLocationRef.current = currentLocation;
        },
        (error) => {
          console.error('Erro no monitoramento:', error);
        },
        { enableHighAccuracy: true, distanceFilter: 1 }
      );

      return () => {
        if (interval) clearInterval(interval);
        Geolocation.clearWatch(watchId);
      };
    } else if (interval) {
      clearInterval(interval);
    }
  }, [isTracking]);

  useEffect(() => {
    if (time > 0 && distance > 0) {
      const pace = time / (distance * 60);
      const minutes = Math.floor(pace);
      const seconds = Math.floor((pace - minutes) * 60);
      setAveragePace(
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    }
  }, [time, distance]);

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
