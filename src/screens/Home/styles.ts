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

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin-top: 26px;
  margin-bottom: 13px;
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

export const NoActivitiesContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const NoActivitiesTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #1e1e1e;
  text-align: center;
  margin-bottom: 20px;
`;

export const NoActivitiesButton = styled.View`
  width: 200px;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  border: 1px solid #1e1e1e;
`;
