import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import useUserLocation from '../../hooks/useUserLocation';
import React, { useEffect, useState } from 'react';
import useTracking from '../../hooks/useTracking';
import ActivityInfos from './components/ActivityInfos';
import ActivityControls from './components/ActivityControls';
import * as S from './style';
import StartActivityControls from '../../components/StartActivityControls';
import ActivityModal from '../../components/ActivityModal';

const Activity: React.FC = () => {
  const { region, setRegion } = useUserLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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

  if (isLoading) {
    return null;
  }

  const handleStart = () => {
    startTracking();
    setHasStarted(true);
  };

  const handleStop = () => {
    stopTracking();
    console.log('Tracking stopped');
    setHasStarted(false);
    setModalVisible(true);
  };
  

  return (
    <S.Container>
      <S.ActivityStartWrapper>
        <ActivityInfos distance={distance} time={time} averagePace={averagePace} />
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
          <StartActivityControls onStart={handleStart} />
        )}
      </S.ActivityControlsWrapper>

      <ActivityModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        distance={distance}
        time={time}
        averagePace={averagePace}
      />
    </S.Container>
  );
};

export default Activity;
