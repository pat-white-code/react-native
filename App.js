import React from "react";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import config from "./config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./src/Screens/CreatePostScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from "react-native-paper";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import LoginScreen from "./src/Screens/LoginScreen";

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
    uri: `http://${config.IP_ADDRESS}:4000/graphql`,
    cache: new InMemoryCache(),
});

const MyAppBar = ({ navigation, route, options, back }) => {
    const title = getHeaderTitle(options, route.name);
    return (
        <Appbar.Header>
            {back && <Appbar.BackAction onPress={navigation.goBack} />}
            <Appbar.Content title={title} />
            <Appbar.Action
                icon="plus"
                onPress={() => {
                    navigation.navigate("CreatePost");
                }}
            />
            <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
    );
};

const App = () => {
    return (
        <ApolloProvider client={client}>
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            header: (props) => <MyAppBar {...props} />,
                        }}
                    >
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            // options={{ title: "Home" }}
                        />
                        <Stack.Screen
                            name="CreatePost"
                            component={CreatePostScreen}
                            options={{ title: "Create Post" }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </ApolloProvider>
    );
};

AppRegistry.registerComponent("MyApplication", () => App);

export default App;
