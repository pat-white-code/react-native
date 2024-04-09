import React from "react";
import { View, StyleSheet } from "react-native";
// import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import config from "./config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./src/Screens/CreatePostScreen";
import HomeScreen from "./src/Screens/HomeScreen";

const Stack = createNativeStackNavigator();

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
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: "Home" }}
                    />
                    <Stack.Screen
                        name="CreatePost"
                        component={CreatePostScreen}
                        options={{ title: "Create Post" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ApolloProvider>
    );
};

AppRegistry.registerComponent("MyApplication", () => App);

export default App;
