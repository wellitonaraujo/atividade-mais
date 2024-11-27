import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './styles';

interface HeaderProps {
  photo: { uri: string };
  name: string;
  onNotificationPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ photo, name, onNotificationPress }) => {
  return (
    <S.Container>
        
      <S.PhotoWrapper>
        <S.Photo source={photo} />
      </S.PhotoWrapper>

      <S.TextContainer>
        <S.WelcomeText>Bem-vindo,</S.WelcomeText>
        <S.NameText>{name}</S.NameText>
      </S.TextContainer>

      {/* <TouchableOpacity onPress={onNotificationPress}>
        <S.NotificationWrapper>
          <S.NotificationIcon>
            <S.NotificationBadge />
          </S.NotificationIcon>
        </S.NotificationWrapper>
      </TouchableOpacity> */}
    </S.Container>
  );
};

export default Header;
