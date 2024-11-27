import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import useUserLocation from '../../hooks/useUserLocation';
import React, { useEffect, useState } from 'react';
import useTracking from '../../hooks/useTracking';
import ActivityInfos from './components/ActivityInfos';
import ActivityControls from './components/ActivityControls';
import * as S from './style';
import StartActivityControls from '../../components/StartActivityControls';
import ActivityModal from '../../components/ActivityModal';
import { View } from 'react-native';

const Activity: React.FC = () => {
  const { region, setRegion } = useUserLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [distanceData, setDistanceData] = useState(0);
  const [timeData, setTimeData] = useState(0);
  const [averagePaceData, setAveragePaceData] = useState('00:00');

  const {
    distance,
    time,
    averagePace,
    isTracking,
    isPaused,
    stopTracking,
    startTracking,
    pauseTracking,
  } = useTracking();

  useEffect(() => {
    if (region.latitude !== 37.78825 && region.longitude !== -122.4324) {
      setIsLoading(false);
    }
  }, [region]);

  useEffect(() => {
    if (hasStarted) {
      setDistanceData(distance);
      setTimeData(time);
      setAveragePaceData(averagePace);
    }
  }, [distance, time, averagePace, hasStarted]);

  if (isLoading) {
    return null;
  }

  const handleStart = () => {
    startTracking();
    setHasStarted(true);
  };

  const handleStop = () => {
    stopTracking();
    setHasStarted(false);
    setModalVisible(true);
  };

  return (
    <S.Container>
      <S.ActivityStartWrapper>
        <ActivityInfos
          distance={distanceData}
          time={timeData}
          averagePace={averagePaceData}
        />
      </S.ActivityStartWrapper>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={region}
        showsUserLocation={true}
        loadingEnabled
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      />

      <S.ActivityControlsWrapper>
        {hasStarted ? (
          <ActivityControls
            isPaused={isPaused}
            isTracking={isTracking}
            pauseTracking={pauseTracking}
            stopTracking={handleStop}
          />
        ) : (
         <View style={{padding: 20}}>
           <StartActivityControls onStart={handleStart} />
         </View>
        )}
      </S.ActivityControlsWrapper>

      <ActivityModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setDistanceData(0);
          setTimeData(0);
          setAveragePaceData('00:00');
        }}
        distance={distanceData}
        time={timeData}
        averagePace={averagePaceData}
      />
    </S.Container>
  );
};



export default Activity;
