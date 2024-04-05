import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/components/CurrentWeather";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  );
};

export default App;
