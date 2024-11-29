import styled from 'styled-components/native';
import { moderateScale, verticalScale } from '../../utils/metrics';

export const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
  height: ${verticalScale(400)}px;
  background-color: white;
  padding: ${moderateScale(20)}px;
  border-top-right-radius: ${verticalScale(18)}px;
  border-top-left-radius: ${verticalScale(18)}px;
  justify-content: space-between;
`;


export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const RightHeader = styled.View`
  flex-direction: row;
`;

export const ActionIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 30px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #ECECEC;
  margin: 15px 0;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoBlock = styled.View`
  align-items: center;
`;

export const InfoTitle = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const InfoValue = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const Details = styled.View`
  margin-bottom: 20px;
`;

export const DetailRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const IconDetail = styled.Image`
    width: 18px;
    height: 18px;
`;

export const RowDivider = styled.View`
  height: 1px;
  background-color: #ddd;
`;

export const DetailText = styled.Text`
  flex: 1;
  margin-left: 10px;
  color: #818181;
  font-size: 13px;
`;

export const DetailValue = styled.Text`
  font-size: 14px;
  color: #818181;
  font-size: 13px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #5235C3;
  padding: 15px;
  border-radius: 25px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const Content = styled.View`
  flex: 1;
`;

