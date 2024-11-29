import React, { useEffect } from "react";
import Header from "./components/Header";
import { imgs } from "../../assets/pngs";
import * as S from "./styles";
import { ScrollView } from "react-native";
import RecentActivityCard from "../../components/RecentActivityCard";
import Banner from "./components/Banner";
import NoActivities from "../../components/NoActivities";
import { useNavigation } from "@react-navigation/native";
import { useTrackingContext } from "../../context/TrackingContext";

const Home: React.FC = () => {
  const { activities, fetchActivities } = useTrackingContext();
  const navigation = useNavigation(); 

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  const handleStartActivity = () => {
    navigation.navigate("Activity");
  };
  
  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          name="Carlos Eduardo"
          photo={imgs.user}
          onNotificationPress={() => {}}
        />
        <Banner onPress={handleStartActivity} />
        <S.Title>Atividades recentes</S.Title>
        {activities.length === 0 ? (
          <S.NoActivitiesContainer>
            <S.Description>Que tal dar o primeiro passo hoje?</S.Description>
            <NoActivities
              title="Começar"
              onPress={handleStartActivity}
              icon={imgs.tennis}
            />
          </S.NoActivitiesContainer>
        ) : (
          <>
            {activities.map((item, index) => (
              <RecentActivityCard key={`${item.date}-${index}`} item={item} />
            ))}
          </>
        )}
        <S.Title>Suas metas</S.Title>
          <S.NoActivitiesContainer>
            <S.Icon source={imgs.trophy} />
            <S.Title>Que tal começar hoje?</S.Title>
            <S.Description>Defina uma meta e conquiste seus objetivos.</S.Description>
            <NoActivities
              title="Criar meta"
              onPress={handleStartActivity}
              icon={imgs.trophyIcon}
            />
        </S.NoActivitiesContainer>
      </ScrollView>
    </S.Container>
  );
};

export default Home;
