import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const StepCountContainer = styled.View`
  margin-top: 20px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 10px;
`;

export const StepCountText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ButtonContainer = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
