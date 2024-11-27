import React from 'react';
import { imgs } from '../../assets/pngs'; 
import { formatTime } from '../../utils/formatTime';
import * as S from './style';

const RecentActivityCard: React.FC<{ item: any }> = ({ item }) => {
  const { distance, time, date } = item;

  return (
    <S.Card>
      <S.IconWrapper>
        <S.Icon source={imgs.runbg} resizeMode='contain'/>
      </S.IconWrapper>

      <S.InfoWrapper>
        <S.InfoRow>
          <S.InfoColumn>
            <S.InfoLabel>Distância</S.InfoLabel>
            <S.InfoValue>{distance} km</S.InfoValue>
          </S.InfoColumn>

          <S.Separator />

          <S.InfoColumn>
            <S.InfoLabel>Duração</S.InfoLabel>
            <S.InfoValue>{formatTime(time)}</S.InfoValue>
          </S.InfoColumn>

          <S.Separator />

          <S.InfoColumn>
            <S.InfoLabel>Data</S.InfoLabel>
            <S.InfoValue>{date}</S.InfoValue>
          </S.InfoColumn>
        </S.InfoRow>
      </S.InfoWrapper>
    </S.Card>
  );
};

export default RecentActivityCard;
