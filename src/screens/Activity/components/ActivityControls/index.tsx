import { Button, View, StyleSheet } from 'react-native';
import React from 'react';

interface ActivityControlsProps {
  isTracking: boolean;
  startTracking: () => void;
  stopTracking: () => void;
  pauseTracking: () => void;
}

const ActivityControls: React.FC<ActivityControlsProps> = ({
  isTracking,
  startTracking,
  stopTracking,
  pauseTracking,
}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2 }}>
      <Button title="Iniciar" onPress={startTracking} disabled={isTracking} />
      <Button title="Pausar" onPress={pauseTracking} disabled={!isTracking} />
      <Button title="Parar" onPress={stopTracking} disabled={!isTracking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default ActivityControls;
