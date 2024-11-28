import React from 'react';
import { Modal, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatTimeComplet } from '../../utils/formatTime';
import * as S from './styles';

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
      onClose();
    } catch (error) {
      console.error('Erro ao salvar a atividade:', error);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <S.Overlay>
        <S.ModalContainer>
          <S.ModalTitle>Atividade Concluída</S.ModalTitle>
          <Text>Distância: {distance ? distance.toFixed(2) : '0.00'} km</Text>
          <Text>Tempo: {formatTimeComplet(time)}</Text>
          <Text>Ritmo médio: {averagePace} min/km</Text>
          <Text>Calorias: 212 Kcal (estático)</Text>
          <Text>Elevação: 43 m (estático)</Text>

          <S.SaveButton onPress={handleSave}>
            <S.ButtonText>Salvar atividade</S.ButtonText>
          </S.SaveButton>

          <S.CancelButton onPress={onClose}>
            <S.ButtonTextancel>Cancelar</S.ButtonTextancel>
          </S.CancelButton>
        </S.ModalContainer>
      </S.Overlay>
    </Modal>
  );
};

export default ActivityModal;
