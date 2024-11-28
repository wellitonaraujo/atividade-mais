import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { imgs } from "../../assets/pngs";
import * as S from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, View } from "react-native";
import RecentActivityCard from "../../components/RecentActivityCard";
import Banner from "./components/Banner";
import NoActivities from "../../components/NoActivities";
import { useNavigation } from "@react-navigation/native";

interface Activity {
  distance: string;
  time: number;
  date: string;
}

const Home: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const navigation = useNavigation(); 
  const fetchActivities = async () => {
    try {
      const storedActivities = await AsyncStorage.getItem("activities");
      const parsedActivities = storedActivities ? JSON.parse(storedActivities) : [];
      setActivities(parsedActivities);
    } catch (error) {
      console.error("Erro ao carregar atividades:", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleStartActivity = () => {
    navigation.navigate("Activity")
  };

  return (
    <S.Container>
      <Header
        name="Carlos Eduardo"
        photo={imgs.user}
        onNotificationPress={() => console.log("Notificação clicada!")}
      />
      <Banner onPress={handleStartActivity}/>
      <S.Title>Atividades recentes</S.Title>
      {activities.length === 0 ? (
        <S.NoActivitiesContainer>
          <NoActivities onPress={handleStartActivity} />
        </S.NoActivitiesContainer>
      ) : (
        <FlatList
          data={activities}
          keyExtractor={(item, index) => `${item.date}-${index}`}
          renderItem={({ item }) => (
            <RecentActivityCard item={item} />
          )}
        />
      )}
    </S.Container>
  );
};

export default Home;
