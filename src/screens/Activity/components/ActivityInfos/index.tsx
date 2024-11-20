// src/components/ActivityInfos.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as S from "./style";

interface ActivityInfosProps {
  distance: number;
  time: number;
  averagePace: string;
}

const ActivityInfos: React.FC<ActivityInfosProps> = ({ distance, time, averagePace }) => {

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <S.Container>
      <S.ActivityActions>
          <Text style={styles.text}>Distância: {distance.toFixed(2)} km</Text>
          <Text style={styles.text}>Tempo: {formatTime(time)}</Text>
          <Text style={styles.text}>Ritmo Médio: {averagePace} min/km</Text>
      </S.ActivityActions>
    </S.Container>
  );
};

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

export default ActivityInfos;
