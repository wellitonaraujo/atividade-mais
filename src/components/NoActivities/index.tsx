import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import * as S from "./styles"; // Certifique-se de que os estilos estão importados corretamente
import { imgs } from "../../assets/pngs"; // Ou o caminho correto da sua imagem

interface NoActivitiesProps {
  onPress: () => void; // A função que será chamada quando o botão for pressionado
}

const NoActivities: React.FC<NoActivitiesProps> = ({ onPress }) => {
  return (
    <S.NoActivitiesContainer>
        <S.NoActivitiesTitle>Que tal dar o primeiro passo hoje?</S.NoActivitiesTitle>
        <TouchableOpacity onPress={onPress}>
            <S.NoActivitiesButton>
            <S.Icon source={imgs.tennis} />
            <S.Title>Começar</S.Title>
            </S.NoActivitiesButton>
        </TouchableOpacity>
    </S.NoActivitiesContainer>
  );
};

export default NoActivities;
