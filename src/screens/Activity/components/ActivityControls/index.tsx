// src/components/ActivityControls.tsx
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useTrackingContext } from '../../../../context/TrackingContext';

interface ActivityControlsProps {
  isTracking: boolean;
  startTracking: () => void;
  stopTracking: () => void;
}

const ActivityControls: React.FC<ActivityControlsProps> = ({ isTracking, startTracking, stopTracking }) => {

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 20 }}>
      {/* Botão para iniciar o rastreamento */}
      <Button title="Iniciar Rastreamento" onPress={startTracking} disabled={isTracking} />

      {/* Botão para parar o rastreamento */}
      <Button title="Parar Rastreamento" onPress={stopTracking} disabled={!isTracking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default ActivityControls;
