import React, { useEffect } from "react";
import Header from "./components/Header";
import { imgs } from '../../assets/pngs';
import * as S from './styles';


const Home: React.FC = () => {
  
  const handleNotificationPress = () => {
    console.log('Notificação clicada!');
  };

//   const monitorSteps = async () => {
//     try {
//       const isInitialized = await initialize();
//       if (!isInitialized) {
//         console.error("Health Connect não foi inicializado.");
//         return;
//       }

//       const grantedPermissions = await requestPermission([
//         { accessType: 'read', recordType: 'Steps' },
//       ]);

//       if (grantedPermissions.length === 0) {
//         console.error("Permissões não concedidas.");
//         return;
//       }

//       console.log("Permissões concedidas:", grantedPermissions);

//       const stepData = await readRecords('Steps', {
//         timeRangeFilter: {
//           operator: 'between',
//           startTime: '2024-11-01T00:00:00.000Z',
//           endTime: new Date().toISOString(),
//         },
//       });

//       console.log("Dados de passos:", stepData);
//     } catch (error) {
//       console.error("Erro ao monitorar passos:", error);
//     }
//   };

//   useEffect(() => {
//     const requestPermissions = async () => {
//       try {
//         const isInitialized = await initialize();
//         if (!isInitialized) {
//           console.error("Health Connect não foi inicializado.");
//           return;
//         }

//         const grantedPermissions = await requestPermission([
//           { accessType: 'read', recordType: 'Steps' },
//         ]);

//         if (grantedPermissions.length === 0) {
//           Alert.alert("Permissões", "Permissões de acesso aos passos não foram concedidas.");
//         } else {
//           console.log("Permissões concedidas:", grantedPermissions);
//         }
//       } catch (error) {
//         console.error("Erro ao solicitar permissões:", error);
//       }
//     };

//     requestPermissions();
//   }, []);

  return (
    <S.Container>
      <Header 
        name='Carlos Eduardo' 
        photo={imgs.user}  
        onNotificationPress={handleNotificationPress}
      />
    </S.Container>
  );
};

export default Home;
