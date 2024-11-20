import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import useUserLocation from "../../hooks/useUserLocation";;
import ActivityControls from "./components/ActivityControls";
import ActivityInfos from "./components/ActivityInfos";
import React, { useEffect, useState } from "react"
import useTracking from "../../hooks/useTracking";
import * as S from "./style"

const Activity: React.FC = () => {
  const { region, setRegion } = useUserLocation();
  const [isLoading, setIsLoading] = useState(true);
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
    return;
  }

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
         <ActivityControls
          isTracking={isTracking}
          isPaused={isPaused}
          startTracking={startTracking}
          pauseTracking={pauseTracking}
          stopTracking={stopTracking}
        />
        </S.ActivityControlsWrapper>
    </S.Container>

  );
};

export default Activity;
