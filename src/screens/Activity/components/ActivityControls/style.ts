import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import colors from "../../../../themes/colors";


export const ControlWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  height: 140px;
`;

export const ControlButton = styled(TouchableOpacity)<{ color: string; disabled: boolean }>`
  background-color: ${({ disabled, color }) => (disabled ? '#ccc' : color)};
  width: 165px;
  height: 36px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
`;

export const CircularButton = styled.TouchableOpacity<{ backgroundColor: string }>`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  bottom: 40px;
`;

export const Icon = styled.Image`
  width: 18px;
  height: 22px;
`;


