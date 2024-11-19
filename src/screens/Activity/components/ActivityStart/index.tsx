import * as S from "./style";
import { Text } from "react-native-paper";
import useTracking from "../../../../hooks/useTracking";
import { Button, StyleSheet } from "react-native";

const ActivityStart = () => {
    const { distance, time, averagePace, isTracking, stopTracking, startTracking} =
    useTracking();

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

    return (
        <S.Container>
            <S.ActivityActions>
                <Text style={styles.text}>Distância: {distance.toFixed(2)} km</Text>
                <Text style={styles.text}>Tempo: {formatTime(time)}</Text>
                <Text style={styles.text}>Ritmo Médio: {averagePace} min/km</Text>
            </S.ActivityActions>
            {isTracking ? (
        <Button title="Parar" onPress={stopTracking} />
      ) : (
        <Button title="Iniciar" onPress={startTracking} />
      )}
        </S.Container>
    )
}

export default ActivityStart;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
    },
  });