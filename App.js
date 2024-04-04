import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

const styles = new StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    display: 'flex',
    flex: 1,
  }
})

const App = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text>Current Weather</Text>
            </View>
        </SafeAreaView>
    );
};

export default App;
