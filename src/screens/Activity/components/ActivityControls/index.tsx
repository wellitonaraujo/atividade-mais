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
  const [areControlsEnabled, setAreControlsEnabled] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

 
 const toggleControls = () => {
  setAreControlsEnabled((prevState) => !prevState);
};

const toggleLock = () => {
  setIsLocked((prevState) => !prevState); 
  toggleControls(); 
};
  return (
    <S.Container>
      <S.ControlWrapper>
        <S.ControlButton
          onPress={pauseTracking}
          color={isPaused ? "#4FAD6F" : "#FFC82D"} 
          disabled={!isTracking || !areControlsEnabled}
        >
          <S.ButtonText>{isPaused ? "Continuar" : "Pausar"}</S.ButtonText>
        </S.ControlButton>

        <S.CircularButton 
          onPress={toggleLock} 
          backgroundColor={isLocked ? "#5235C3" : "#9F9F9F"}
        >
          <S.Icon 
            source={isLocked ? imgs.padlock : imgs.padlockoff}
          />
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
