import { useState, useEffect, useRef } from "react";
import Geolocation from "@react-native-community/geolocation";
import haversine from "haversine";

const useTracking = () => {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [averagePace, setAveragePace] = useState("00:00");
  const [isTracking, setIsTracking] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // Estado para controlar pausa

  const startTimeRef = useRef<Date | null>(null);
  const prevLocationRef = useRef<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let watchId: number | null = null;

    if (isTracking && !isPaused) { // Apenas atualiza se não estiver pausado
      startTimeRef.current = new Date();
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      watchId = Geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentLocation = { latitude, longitude };

          if (prevLocationRef.current) {
            const distanceBetweenPoints = haversine(
              prevLocationRef.current,
              currentLocation,
              { unit: "km" }
            );

            setDistance((prevDistance) => {
              const newDistance = prevDistance + distanceBetweenPoints;

              // Atualiza o ritmo médio
              if (newDistance > 0 && time > 0) {
                const pace = time / (newDistance * 60); // minutos por km
                const minutes = Math.floor(pace);
                const seconds = Math.floor((pace - minutes) * 60);
                setAveragePace(
                  `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
                );
              }

              return newDistance;
            });
          }

          prevLocationRef.current = currentLocation;
        },
        (error) => {
          console.error("Erro no monitoramento:", error);
        },
        { enableHighAccuracy: true, distanceFilter: 1 }
      );
    }

    return () => {
      if (interval) clearInterval(interval);
      if (watchId !== null) Geolocation.clearWatch(watchId);
    };
  }, [isTracking, isPaused, time]);

  const startTracking = () => {
    setDistance(0);
    setTime(0);
    setAveragePace("00:00");
    prevLocationRef.current = null;
    setIsTracking(true);
    setIsPaused(false); // Garante que o rastreamento começa do zero
  };

  const stopTracking = () => {
    setIsTracking(false);
    setIsPaused(false); // Reseta o estado ao parar
  };

  const pauseTracking = () => {
    setIsPaused((prev) => !prev); // Alterna entre pausado e não pausado
  };

  return {
    distance,
    time,
    averagePace,
    isTracking,
    isPaused,
    startTracking,
    stopTracking,
    pauseTracking,
  };
};

export default useTracking;
