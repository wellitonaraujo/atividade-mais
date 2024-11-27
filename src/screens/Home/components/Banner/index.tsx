import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { imgs } from '../../../../assets/pngs';

interface Banner {
    onPress: () => void
}

const Banner: React.FC<Banner> = ({onPress}) => {
  return (
    <BannerContainer>
      <LeftSide>
        <Title>Comece agora sua jornada</Title>
        <Button onPress={onPress}>
          <ButtonText>Nova atividade</ButtonText>
        </Button>
      </LeftSide>
      <RightSide>
        <BannerImage source={imgs.banner} resizeMode='contain'/>
      </RightSide>
    </BannerContainer>
  );
};

const BannerContainer = styled.View`
  height: 137px;
  border-radius: 4px;
  background-color: #1e1e1e;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;

`;

const LeftSide = styled.View`
  flex: 1;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600; 
  color: white;
`;

const Button = styled(TouchableOpacity)`
  width: 133px;
  height: 51px;
  background-color: white;
  border-radius: 51px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #1e1e1e;
  font-size: 13px;
  font-weight: 600;
`;

const RightSide = styled.View`

`;

const BannerImage = styled(Image)`
  width: 210px; 
  height: 123px;
  margin-top: 14px;
`;

export default Banner;
