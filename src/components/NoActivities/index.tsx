import { ImageSourcePropType, TouchableOpacity } from "react-native";
import * as S from "./styles";;
import React from "react";
interface NoActivitiesProps {
  onPress: () => void;
  icon: ImageSourcePropType
  title: string
}

const NoActivities: React.FC<NoActivitiesProps> = ({ onPress, icon, title }) => {
  return (
    <S.NoActivitiesContainer>
        <TouchableOpacity onPress={onPress}>
            <S.NoActivitiesButton>
            <S.Icon source={icon} />
            <S.Title>{title}</S.Title>
            </S.NoActivitiesButton>
        </TouchableOpacity>
    </S.NoActivitiesContainer>
  );
};

export default NoActivities;
