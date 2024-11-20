import { Alert, PermissionsAndroid, Platform } from "react-native";
import Geolocation from '@react-native-community/geolocation';
import { useState, useEffect } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [loading, setLoading] = useState(true);

  const requestLocationPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        console.log(granted);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn("Erro ao solicitar permissão de localização:", err);
        return false;
      }
    }
    return true;
  };
  

  const getLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert("Permissão Negada", "Não foi possível acessar sua localização.");
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });

        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.006,
          longitudeDelta: 0.006,
        });
        setLoading(false);
      },
      (error) => {
        console.error("Erro ao obter localização:", error);
        Alert.alert("Erro ao obter localização", error.message);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {
    region,
    setRegion,
  };
};

export default useUserLocation;
