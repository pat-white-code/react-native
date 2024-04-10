import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { gql, useMutation } from "@apollo/client";
import { StyleSheet, View } from "react-native";

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
        paddingTop: 100,
    },
    textInput: {
        marginVertical: 5,
    },
});

const LoginScreen = () => {
    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if (data) {
        console.log("data", data);
    }

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
                onPress={() => {
                    loginUser({
                        variables: {
                            loginInput: {
                                username,
                                password,
                            },
                        },
                    });
                }}
            >
                Login
            </Button>
        </View>
    );
};

export default LoginScreen;
