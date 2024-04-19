import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Post from "../components/Post";

import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/posts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
});

const HomeScreen = ({ navigation }) => {
    const { data, errors, loading } = useQuery(GET_POSTS);

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (errors) {
        return (
            <View>
                <Text>Error</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.posts}
                renderItem={post => <Post post={post.item} navigation={navigation} />}
                keyExtractor={post => post.id}
            />
        </View>
    );
};

export default HomeScreen;
