import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Create Post"
                onPress={() => navigation.navigate('CreatePost')}
            />
        </View>
    );
};

export default HomeScreen;
