import { Button, View, StyleSheet } from 'react-native';
import React from 'react';

interface ActivityControlsProps {
  isTracking: boolean;
  isPaused: boolean;
  startTracking: () => void;
  stopTracking: () => void;
  pauseTracking: () => void;
}

const ActivityControls: React.FC<ActivityControlsProps> = ({
  isTracking,
  isPaused,
  startTracking,
  stopTracking,
  pauseTracking,
}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2 }}>
      {/* Botão para Iniciar o rastreamento */}
      <Button title="Iniciar" onPress={startTracking} disabled={isTracking} />
      
      {/* Botão Pausar ou Continuar, dependendo do estado de pausa */}
      <Button 
        title={isPaused ? "Continuar" : "Pausar"} 
        onPress={pauseTracking} 
        disabled={!isTracking}
      />
      
      {/* Botão Parar sempre ativo quando estiver rastreando */}
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
