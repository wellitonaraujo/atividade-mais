import React from "react";
import styled from "styled-components/native";

interface StartActivityControlsProps {
  onStart: () => void;
}

const StartActivityControls: React.FC<StartActivityControlsProps> = ({ onStart }) => {
  return (
    <Container>
      <StartButton onPress={onStart}>
        <StartButtonText>Iniciar Atividade</StartButtonText>
      </StartButton>
    </Container>
  );
};

export default StartActivityControls;

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 60px;
`;

const StartButton = styled.TouchableOpacity`
  background-color: #4fad6f;
  padding: 15px 30px;
  border-radius: 5px;
`;

const StartButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
