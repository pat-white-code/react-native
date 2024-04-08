import React from "react";
import { View, StyleSheet } from "react-native";
// import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { gql } from "@apollo/client";
import config from "./config";

const client = new ApolloClient({
    uri: `http://${config.IP_ADDRESS}:4000/graphql`,
    cache: new InMemoryCache(),
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <View style={styles.container}>
                <UpcomingWeather />
            </View>
        </ApolloProvider>
    );
};

AppRegistry.registerComponent("MyApplication", () => App);

export default App;
