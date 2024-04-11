import React, { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import { gql, useMutation } from "@apollo/client";
import { StyleSheet, View } from "react-native";
// import { storeToken } from "../util/auth";
import { AuthContext } from "../context/auth";

const LOGIN_USER = gql`
    mutation Mutation($loginInput: LoginInput) {
        login(loginInput: $loginInput) {
            createdAt
            email
            id
            token
            username
        }
    }
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        paddingTop: 100
    },
    textInput: {
        marginVertical: 5
    }
});

const LoginScreen = ({ navigation }) => {
    const context = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER, {
        update(_, result) {
            debugger
            const userData = result.data.login
            console.log('userData', userData)
            context.login(userData)
            navigation.navigate("Home");
        },
        variables: {
            loginInput: {
                password,
                username
            }
        }
    });

    // if (data) {
    //     await storeToken(data.login.token)
    //     navigation.navigate(home)
    // }

    // useEffect(async () => {
    //     if (data.login.token) {
    //         debugger
    //         await storeToken(data.login.token);
    //         // navigation.navigate('Home')
    //     }
    // }, [data]);

    // if (data) {
    //     console.log("data", data);
    // }

    if (error) {
        console.log("error", error);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                disabled={loading}
                label="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.textInput}
                disabled={loading}
                label="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button
                style={styles.textInput}
                disabled={loading}
                mode="contained"
                onPress={() => loginUser()}
            >
                Login
            </Button>
        </View>
    );
};

export default LoginScreen;
