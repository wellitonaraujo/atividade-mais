import styled from 'styled-components/native';
import { View, Text, Image } from 'react-native';

export const Card = styled(View)`
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  flex-direction: row;
  border-width: 1px;
  border-color: #ECECEC;
  align-items: center;
`;

export const IconWrapper = styled(View)`
  margin-right: 15px;
`;

export const Icon = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const InfoWrapper = styled(View)`
  flex: 1;
`;

export const InfoRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;


export const InfoColumn = styled(View)`
  flex: 1;
  align-items: center;
`;

export const InfoLabel = styled(Text)`
  font-size: 12px;
  color: #9F9F9F;
`;

export const InfoValue = styled(Text)`
  font-size: 13px;
  margin-top: 5px;
  color: #4B4B4B;
`;

export const Separator = styled(View)`
  border-left-width: 1px;
  border-left-color: #EFEFEF;
  height: 100%;
  margin-horizontal: 10px;
`;
