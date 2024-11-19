import React from "react";
import { Button, StyleSheet, View } from "react-native";
import useTracking from "../../../../hooks/useTracking";

const ActivityControls = () => {
  const { isTracking, startTracking, stopTracking } = useTracking();

  return (
    <View style={styles.container}>
      {isTracking ? (
        <Button title="Parar" onPress={stopTracking} />
      ) : (
        <Button title="Iniciar" onPress={startTracking} />
      )}
    </View>
  );
};

export default ActivityControls;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    height: 154,
  },
});
