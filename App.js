import React from "react";
import { AppRegistry } from "react-native";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import config from "./config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./src/Screens/CreatePostScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import {
    MD3LightTheme as DefaultTheme,
    PaperProvider
} from "react-native-paper";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import LoginScreen from "./src/Screens/LoginScreen";
import { AuthProvider } from "./src/context/auth";
import { getToken } from "./src/util/auth";

const httpLink = createHttpLink({
    uri: `http://${config.IP_ADDRESS}:4000/graphql`
});

const Stack = createNativeStackNavigator();

const authLink = setContext(async (_, { headers }) => {
    const token = await getToken();
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
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
        <AuthProvider>
            <ApolloProvider client={client}>
                <PaperProvider>
                    <NavigationContainer>
                        <Stack.Navigator
                            screenOptions={{
                                header: (props) => <MyAppBar {...props} />
                            }}
                        >
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                            />
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
        </AuthProvider>
    );
};

AppRegistry.registerComponent("MyApplication", () => App);

export default App;
