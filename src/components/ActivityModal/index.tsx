import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatTimeComplet } from '../../utils/formatTime';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  distance: number;
  time: number;
  averagePace: string;
}

const ActivityModal: React.FC<ModalProps> = ({ visible, onClose, distance, time, averagePace }) => {
    
  const handleSave = async () => {
    const activityData = {
      distance: distance.toFixed(2),
      time,
      averagePace,
      date: new Date().toLocaleDateString(),
    };

    try {
      const storedActivities = await AsyncStorage.getItem('activities');
      const activities = storedActivities ? JSON.parse(storedActivities) : [];
      activities.push(activityData);
      await AsyncStorage.setItem('activities', JSON.stringify(activities));
      onClose(); // Fecha o modal após salvar
    } catch (error) {
      console.error('Erro ao salvar a atividade:', error);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ margin: 20, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Atividade Concluída</Text>
          <Text>Distância: {distance ? distance.toFixed(2) : '0.00'} km</Text>
          <Text>Tempo: {formatTimeComplet(time)}</Text>
          <Text>Ritmo médio: {averagePace} min/km</Text>
          <Text>Calorias: 212 Kcal (estático)</Text>
          <Text>Elevação: 43 m (estático)</Text>

          <TouchableOpacity onPress={handleSave} style={{ marginTop: 20, backgroundColor: 'purple', padding: 10, borderRadius: 5 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Salvar atividade</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={{ marginTop: 10 }}>
            <Text style={{ color: 'red', textAlign: 'center' }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ActivityModal;
