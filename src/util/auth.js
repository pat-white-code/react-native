import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem("jwtToken", token);
    } catch (error) {
        console.log(error.message);
    }
};

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem("jwtToken");
        if (token !== null) {
            return token;
        }
    } catch (error) {
        console.log(error.message);
    }
};

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem("jwtToken");
    } catch (error) {
        console.log(error.message);
    }
};

export const isTokenExpired = (decodedToken) =>
    decodedToken.exp * 1000 < Date.now();
