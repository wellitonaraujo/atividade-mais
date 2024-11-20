import { useState, useEffect, useRef } from "react";
import Geolocation from "@react-native-community/geolocation";
import haversine from "haversine";

const useTracking = () => {
  const [distance, setDistance] = useState(0); // Distância em km
  const [time, setTime] = useState(0); // Tempo em segundos
  const [averagePace, setAveragePace] = useState("00:00"); // Ritmo médio
  const [isTracking, setIsTracking] = useState(false); // Estado de rastreamento

  const startTimeRef = useRef<Date | null>(null); // Referência para tempo de início
  const prevLocationRef = useRef<{ latitude: number; longitude: number } | null>(null); // Localização anterior

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
              { unit: "km" }
            );
            setDistance((prev) => prev + distanceBetweenPoints);

            // Calculando o ritmo médio diretamente aqui
            const pace = (time + 1) / ((distance + distanceBetweenPoints) * 60); // Ritmo em minutos por km
            const minutes = Math.floor(pace);
            const seconds = Math.floor((pace - minutes) * 60);
            setAveragePace(
              `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
            );
          }

          prevLocationRef.current = currentLocation;
        },
        (error) => {
          console.error("Erro no monitoramento:", error);
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
  }, [isTracking, time, distance]);

  const startTracking = () => {
    setDistance(0);
    setTime(0);
    setAveragePace("00:00");
    prevLocationRef.current = null;
    setIsTracking(true);
  };

  const stopTracking = () => {
    setIsTracking(false);
  };

  return {
    distance,
    time,
    averagePace,
    isTracking,
    startTracking,
    stopTracking,
  };
};


export default useTracking;
