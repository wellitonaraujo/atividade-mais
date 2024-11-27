import React from 'react';
import * as S from './style';
import { imgs } from '../../../../assets/pngs';
import { formatTime } from '../../../../utils/formatTime';

interface ActivityInfosProps {
  distance: number;
  time: number;
  averagePace: string;
}

const ActivityInfos: React.FC<ActivityInfosProps> = ({ distance, time, averagePace }) => {

  return (
    <S.Container>
      <S.Info>
        <S.Title>Tempo</S.Title>
        <S.Value>{formatTime(time)}</S.Value>
        <S.Icon resizeMode='contain' source={imgs.photo} />
      </S.Info>

      <S.Info>
        <S.Title>Distância</S.Title>
        <S.ValueDistance highlight>{distance.toFixed(2)}</S.ValueDistance>
        <S.Unit>km</S.Unit>
      </S.Info>

      <S.Info>
        <S.Title>Ritmo médio</S.Title>
        <S.Value>{averagePace}</S.Value>
        <S.Unit>(min/km)</S.Unit>
      </S.Info>
    </S.Container>
  );
};

export default ActivityInfos;
