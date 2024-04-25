import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { ActivityIndicator } from 'react-native-paper';
import Post from "../components/Post";

import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/posts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    loadingContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const HomeScreen = ({ navigation }) => {
    const { data, errors, loading } = useQuery(GET_POSTS);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
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
