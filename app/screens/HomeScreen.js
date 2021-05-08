import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    //SafeAreaView,
    ScrollView,
    TextInput,
    Platform,
    StatusBar,
} from "react-native";
import Post from "../components/SearchScreen/post";
import ImageUpload from "../components/imageUpload";
import { db } from "../../App";
import BottomNavigator from "../components/BottomNavigator";

export default function HomeScreen(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    post: doc.data(),
                }))
            );
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.top}>
                    <View style={styles.notifFormat}>
                        <Image
                            style={styles.notifIcon}
                            source={require("../assets/notification.png")}
                        />
                    </View>
                    <View style={styles.topFormat}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("Search");
                            }}
                        >
                            <Text style={styles.statusText}>Explore</Text>
                        </TouchableOpacity>
                        <Text style={styles.statusText}>Home</Text>
                        <Text style={styles.statusText}>Guilds</Text>
                    </View>
                </View>
            </View>
            {/*Use FlatList*/}
            <ScrollView style={styles.middleContainer}>
                {posts.map(({ id, post }) => {
                    return (
                        <Post
                            key={id}
                            pfp={post.pfp}
                            imageURL={post.imageURL}
                            username={post.username}
                            guild={post.guild}
                            caption={post.caption}
                            skill={post.skill}
                        ></Post>
                    );
                })}
            </ScrollView>
            <View style={{ flex: 0.13 }}>
                <BottomNavigator
                    navigation={props.navigation}
                ></BottomNavigator>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    addIcon: {
        width: 50,
        height: 50,
    },
    circle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        backgroundColor: "#2F2F2F",
        borderRadius: 50,
    },
    rectangle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        width: 75,
        height: 40,
        backgroundColor: "#2F2F2F",
        borderRadius: 10,
    },
    notifFormat: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    top: {
        flex: 0.75,
    },
    container: {
        flex: 1,
    },
    topFormat: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    statusText: {
        textDecorationLine: "underline",
        fontSize: 30,
        fontWeight: "600",
    },
    topContainer: {
        flex: 0.1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#E2CFCA",
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
    },
    middleContainer: {
        flex: 1,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
    },
    notifIcon: {
        width: 25,
        height: 25,
        top: "2.5%",
    },
    bottomContainer: {
        flex: 0.1,
        //justifyContent: "flex-end",
        backgroundColor: "#E2CFCA",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
    },
});
