import React, { useState } from "react";
import styled from "styled-components/native";
import { imgs } from "../../assets/pngs";

interface StartActivityControlsProps {
  onStart: () => void;
}

const StartActivityControls: React.FC<StartActivityControlsProps> = ({ onStart }) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const handleIconPress = (activity: string) => {
    setSelectedActivity(activity);
  };

  return (
    <Container>
      <IconContainer>
        <IconWrapper onPress={() => handleIconPress("corrida")}>
          <Icon
            source={imgs.runicon}
            isSelected={selectedActivity === "corrida"}
          />
          <IconTitle>Corrida</IconTitle>
        </IconWrapper>
        <IconWrapper onPress={() => handleIconPress("caminhada")}>
          <Icon
            source={imgs.walk}
            isSelected={selectedActivity === "caminhada"}
          />
          <IconTitle>Caminhada</IconTitle>
        </IconWrapper>
        <IconWrapper onPress={() => handleIconPress("pedalada")}>
          <Icon
            source={imgs.pedal}
            isSelected={selectedActivity === "pedalada"}
          />
          <IconTitle>Pedalada</IconTitle>
        </IconWrapper>
      </IconContainer>
      <StartButton onPress={onStart}>
        <StartButtonText>Começar</StartButtonText>
      </StartButton>
    </Container>
  );
};

export default StartActivityControls;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-bottom: 55px;
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 30px;
`;

const StartButton = styled.TouchableOpacity`
  background-color: #5235C3;
  padding: 15px 30px;
  border-radius: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const StartButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const IconWrapper = styled.TouchableOpacity`
  align-items: center;
`;

const Icon = styled.Image<{ isSelected: boolean }>`
  width: 45px;
  height: 45px;
  border: ${(props) => (props.isSelected ? "2px solid #5235C3" : "none")}; 
  padding: ${(props) => (props.isSelected ? "5px" : "0px")};
  border-radius: 45px;
`;

const IconTitle = styled.Text`
  font-size: 12px;
  color: #1e1e1e;
  margin-top: 5px;
`;
