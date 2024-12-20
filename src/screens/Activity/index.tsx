import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import useUserLocation from "../../hooks/useUserLocation";;
import ActivityStart from "./components/ActivityStart";
import React, { useEffect, useState } from "react";
import * as S from "./style"
import ActivityControls from "./components/ActivityControls";

const Activity: React.FC = () => {
  const { region, setRegion } = useUserLocation();
  const [isLoading, setIsLoading] = useState(true);

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
            <ActivityStart />
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
            <ActivityControls />
        </S.ActivityControlsWrapper>
    </S.Container>

  );
};

export default Activity;
