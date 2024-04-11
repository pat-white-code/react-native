import React, { useContext} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Post from '../components/Post'
import { AuthContext } from "../context/auth";

import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
    query Query {
        posts {
            id
            body
            comments {
                body
                createdAt
                id
                username
            }
            createdAt
            likes {
                createdAt
                id
                username
            }
            username
        }
    }
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
});

const HomeScreen = () => {
    const context = useContext(AuthContext)
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
            <Text>Hello {context.user ? context.user.username : null}</Text>
            <FlatList
                data={data.posts}
                renderItem={post => <Post post={post} />}
                keyExtractor={post => post.id}
            />
        </View>
    );
};

export default HomeScreen;
