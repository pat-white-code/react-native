import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const temp = {
    color: "black",
    fontSize: 48,
};

const wrapper = {
    display: "flex",
    flex: 1,
    backgroundColor: "pink",
};

const container = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
};

const feels = {
    fontSize: 30,
    color: "black",
};

const highLow = {
    color: "black",
    fontSize: 25,
};

const highLowWrapper = {
    display: "flex",
    flexDirection: "row",
};

const bodyWrapper = {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
};

const description = {
    fontSize: 48,
};

const message = {
    fontSize: 30,
};

const styles = new StyleSheet.create({
    container,
    description,
    feels,
    temp,
    highLow,
    message,
    wrapper,
});

const CurrentWeather = () => {
    const { container, wrapper, temp, feels, highLow } = styles;
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather></Feather>
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <View style={highLowWrapper}>
                    <Text style={highLow}>High: 8</Text>
                    <Text style={highLow}>Low: 6</Text>
                </View>
            </View>
            <View style={bodyWrapper}>
                <Text style={description}>It's Sunny</Text>
                <Text style={message}>Perfect t-shirt weather</Text>
            </View>
        </SafeAreaView>
    );
};

export default CurrentWeather;
