import React from 'react';
import { Modal, Pressable } from 'react-native';
import { useTrackingContext } from '../../context/TrackingContext';
import { formatTimeComplet } from '../../utils/formatTime';
import * as S from './styles';
import { imgs } from '../../assets/pngs';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  distance: number;
  time: number;
  averagePace: string;
}

const ActivityModal: React.FC<ModalProps> = ({ visible, onClose, distance, time, averagePace }) => {
  const { addActivity, deleteActivity } = useTrackingContext();

  const handleSave = async () => {
    try {
      await addActivity();
      onClose(); 
    } catch (error) {
      console.error("Erro ao salvar atividade:", error);
    }
  };

  const handleDelete = () => {
    const activityToDelete = {
      distance,
      time,
      averagePace,
      date: new Date().toLocaleDateString(),
    };
    deleteActivity(activityToDelete);
    onClose(); 
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <S.Overlay>
        <S.ModalContainer>
          <S.Content>
            <S.Header>
              <S.LeftHeader>
                <S.Icon source={imgs.runprimary} resizeMode="contain" />
                <S.Title>Corrida</S.Title>
              </S.LeftHeader>
              <S.RightHeader>
                <S.ActionIcon source={imgs.share} resizeMode="contain" />
                <Pressable onPress={handleDelete}>
                  <S.ActionIcon 
                    source={imgs.trash} 
                    resizeMode="contain"  
                  />
                </Pressable>
              </S.RightHeader>
            </S.Header>
            <S.Divider />

            <S.InfoRow>
              <S.InfoBlock>
                <S.InfoTitle>Distância</S.InfoTitle>
                <S.InfoValue>{distance.toFixed(2)} Km</S.InfoValue>
              </S.InfoBlock>
              <S.InfoBlock>
                <S.InfoTitle>Tempo</S.InfoTitle>
                <S.InfoValue>{formatTimeComplet(time)}</S.InfoValue>
              </S.InfoBlock>
              <S.InfoBlock>
                <S.InfoTitle>Ritmo</S.InfoTitle>
                <S.InfoValue>{averagePace}</S.InfoValue>
              </S.InfoBlock>
            </S.InfoRow>
            <S.Divider />

            <S.Details>
              <S.DetailRow>
                <S.IconDetail source={imgs.time} resizeMode="contain" />
                <S.DetailText>Tempo em movimento</S.DetailText>
                <S.DetailValue>02:21 min</S.DetailValue>
              </S.DetailRow>
              <S.RowDivider />
              <S.DetailRow>
                <S.IconDetail source={imgs.speed} resizeMode="contain" />
                <S.DetailText>Velocidade média</S.DetailText>
                <S.DetailValue>8 km/h</S.DetailValue>
              </S.DetailRow>
              <S.RowDivider />
              <S.DetailRow>
                <S.IconDetail source={imgs.elevation} resizeMode="contain" />
                <S.DetailText>Elevação</S.DetailText>
                <S.DetailValue>43 m</S.DetailValue>
              </S.DetailRow>
              <S.RowDivider />
              <S.DetailRow>
                <S.IconDetail source={imgs.calories} resizeMode="contain" />
                <S.DetailText>Calorias</S.DetailText>
                <S.DetailValue>212 Kcal</S.DetailValue>
              </S.DetailRow>
            </S.Details>
          </S.Content>

          <S.SaveButton onPress={handleSave}>
            <S.ButtonText>Salvar atividade</S.ButtonText>
          </S.SaveButton>
        </S.ModalContainer>
      </S.Overlay>
    </Modal>
  );
};

export default ActivityModal;
