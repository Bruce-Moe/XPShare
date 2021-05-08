import React, { PureComponent, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    StatusBar,
    Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Quest from "../components/Quest";
import BottomNavigator from "../components/BottomNavigator";

const quests = [
    {
        id: 1,
        title: "Make a Post!",
        description:
            "Take a picture of something you are proud of and share it for the world to see!",
        reward: 500,
        experience: 1000,
    },
    {
        id: 2,
        title: "Add a Friend!",
        description:
            "Take a picture of something you are proud of and share it for the world to see!",
        reward: 300,
        experience: 2000,
    },
    {
        id: 3,
        title: "Join a Guild!",
        description: "Meet new people and have some fun!",
        reward: 600,
        experience: 1500,
    },
    {
        id: 4,
        title: "Follow a Skill!",
        description: "Take a look at what other people have made!",
        reward: 50,
        experience: 500,
    },
];

export default function QuestsScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Quests</Text>
            </View>
            <ScrollView
                style={{
                    paddingTop: 15,
                    flex: 1,
                }}
                contentContainerStyle={{ paddingBottom: 25 }}
            >
                {quests.map((info) => {
                    return (
                        <View style={styles.quests}>
                            <Quest
                                key={info["id"]}
                                title={info["title"]}
                                description={info["description"]}
                                reward={info["reward"]}
                                experience={info["experience"]}
                            ></Quest>
                        </View>
                    );
                })}
            </ScrollView>
            <View style={{ flex: 0.12 }}>
                <BottomNavigator
                    navigation={props.navigation}
                ></BottomNavigator>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F0ED",
    },
    header: {
        flex: 0.17,
        backgroundColor: "#E2CFCA",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
    },
    quests: {
        margin: 10,
        alignItems: "center",
    },
});
