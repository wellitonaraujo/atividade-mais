import React from 'react';
import * as S from './style';
import { imgs } from '../../../../assets/pngs';

interface ActivityInfosProps {
  distance: number;
  time: number;
  averagePace: string;
}

const ActivityInfos: React.FC<ActivityInfosProps> = ({ distance, time, averagePace }) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

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
