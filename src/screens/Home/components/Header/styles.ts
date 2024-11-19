import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #fff;
`;

export const PhotoWrapper = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 2px;
  border-color: #6c63ff;
  overflow: hidden;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const WelcomeText = styled.Text`
  font-size: 14px;
  color: #9e9e9e;
`;

export const NameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const NotificationWrapper = styled.View`
  position: relative;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
`;

export const NotificationIcon = styled.View`
  width: 20px;
  height: 20px;
  background-color: #6c63ff; 
  border-radius: 10px;
`;

export const NotificationBadge = styled.View`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  background-color: #ff3b30;
  border-radius: 4px;
`;
