import Header from "./components/Header";
import { imgs } from '../../assets/pngs';
import * as S from './styles';
import ActivityStart from "../Activity/components/ActivityStart";

const Home:  React.FC = () => {

    const handleNotificationPress = () => {
        console.log('Notificação clicada!');
      };

    return(
        <S.Container>
            <Header 
                name='Carlos Eduardo' photo={imgs.user}  
                onNotificationPress={handleNotificationPress}
            />
        </S.Container>
    )
}

export default Home;