import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import Geolocation from "@react-native-community/geolocation";
import haversine from "haversine";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Activity {
  distance: number;
  time: number;
  date: string;
  averagePace: string;
}

interface TrackingContextProps {
  distance: number;
  time: number;
  averagePace: string;
  isTracking: boolean;
  isModalVisible: boolean;
  startTracking: () => void;
  stopTracking: () => void;
  closeModal: () => void;
  activities: Activity[];
  addActivity: () => Promise<void>;
  deleteActivity: (activityToDelete: Activity) => Promise<void>;
  fetchActivities: () => Promise<void>;
}

const TrackingContext = createContext<TrackingContextProps | undefined>(undefined);

export const useTrackingContext = () => {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error("useTrackingContext must be used within a TrackingProvider");
  }
  return context;
};

interface TrackingProviderProps {
  children: ReactNode;
}

export const TrackingProvider: React.FC<TrackingProviderProps> = ({ children }) => {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [averagePace, setAveragePace] = useState("00:00");
  const [isTracking, setIsTracking] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);

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
              { unit: "km" }
            );
            setDistance((prev) => prev + distanceBetweenPoints);
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
  }, [isTracking]);

  useEffect(() => {
    if (time > 0 && distance > 0) {
      const pace = time / (distance * 60);
      const minutes = Math.floor(pace);
      const seconds = Math.floor((pace - minutes) * 60);
      setAveragePace(
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      );
    }
  }, [time, distance]);

  const addActivity = async () => {
    const newActivity = {
      distance: parseFloat(distance.toFixed(2)),
      time,
      averagePace,
      date: new Date().toLocaleDateString(),
    };
  
    try {
      const storedActivities = await AsyncStorage.getItem("activities");
      const parsedActivities: Activity[] = storedActivities ? JSON.parse(storedActivities) : [];
      const updatedActivities = [...parsedActivities, newActivity];
      await AsyncStorage.setItem("activities", JSON.stringify(updatedActivities));
  
      fetchActivities();
      console.log("Atividade salva!");
    } catch (error) {
      console.error("Erro ao salvar atividade:", error);
    }
  };
  
  const deleteActivity = async (activityToDelete: Activity) => {
    try {
      const storedActivities = await AsyncStorage.getItem('activities');
      const activities = storedActivities ? JSON.parse(storedActivities) : [];
  
      const filteredActivities = activities.filter(
        (activity: Activity) => activity.date !== activityToDelete.date
      );
  
      await AsyncStorage.setItem('activities', JSON.stringify(filteredActivities));
      setActivities(filteredActivities);
      console.log('Atividade deletada com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar a atividade:', error);
    }
  };  
  
  const fetchActivities = async () => {
    try {
      const storedActivities = await AsyncStorage.getItem("activities");
      const parsedActivities: Activity[] = storedActivities ? JSON.parse(storedActivities) : [];
      setActivities(parsedActivities);
    } catch (error) {
      console.error("Erro ao buscar atividades:", error);
    }
  };
   
  const startTracking = () => {
    setDistance(0);
    setTime(0);
    setAveragePace("00:00");
    prevLocationRef.current = null;
    setIsTracking(true);
  };

  const stopTracking = () => {
    setIsTracking(false);
    addActivity();
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <TrackingContext.Provider
      value={{
        distance,
        time,
        averagePace,
        isTracking,
        isModalVisible,
        startTracking,
        stopTracking,
        closeModal,
        activities,
        addActivity,
        deleteActivity,
        fetchActivities,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
};
