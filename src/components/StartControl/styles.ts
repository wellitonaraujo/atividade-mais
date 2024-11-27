import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled(View)`
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
`;
