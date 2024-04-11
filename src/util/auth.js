import { AsyncStorage } from "react-native";

export const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem("token", token);
        console.log('Token Saved!')
        const token = await getToken()
        console.log('Token retreived', token)
    } catch (error) {
        console.log(error.message);
    }
};

export const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
            return token
        }
    } catch (error) {
        console.log(error.message)
    }
};
