import React, { useState } from 'react';
import * as S from './style';
import colors from '../../../../themes/colors';
import { imgs } from '../../../../assets/pngs';

interface ActivityControlsProps {
  isTracking: boolean;
  isPaused: boolean;
  stopTracking: () => void;
  pauseTracking: () => void;
}

const ActivityControls: React.FC<ActivityControlsProps> = ({
  isTracking,
  isPaused,
  stopTracking,
  pauseTracking,
}) => {
  const [areControlsEnabled, setAreControlsEnabled] = useState(true);

  const toggleControls = () => {
    setAreControlsEnabled((prevState) => !prevState);
  };

  return (
    <S.Container>
      <S.ControlWrapper>
        <S.ControlButton
          onPress={pauseTracking}
          color={colors.yellow400}
          disabled={!isTracking || !areControlsEnabled}
        >
          <S.ButtonText>{isPaused ? "Continuar" : "Pausar"}</S.ButtonText>
        </S.ControlButton>

        <S.CircularButton onPress={toggleControls}>
          <S.Icon source={imgs.padlock} />
        </S.CircularButton>

        <S.ControlButton
          onPress={stopTracking} 
          color={colors.red400}
          disabled={!isTracking || !areControlsEnabled}
        >
          <S.ButtonText>Concluir</S.ButtonText>
        </S.ControlButton>
      </S.ControlWrapper>
    </S.Container>
  );
};

export default ActivityControls;
