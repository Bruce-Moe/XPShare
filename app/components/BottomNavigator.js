import React, { useState, useEffect, PureComponent } from "react";
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
import { db } from "../../App";

export default class BottomNavigator extends PureComponent {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.circle}
                    onPress={() => {
                        this.props.navigation.navigate("Profile");
                    }}
                >
                    <Text style={styles.buttonText}> Profile </Text>
                </TouchableOpacity>

                {
                    <TouchableOpacity
                        style={styles.rectangle}
                        onPress={() => {
                            this.props.navigation.navigate("Skills");
                        }}
                    >
                        <Text style={styles.buttonText}> My Skills </Text>
                    </TouchableOpacity>
                }

                {
                    <TouchableOpacity
                        style={styles.rectangle}
                        onPress={() => {
                            this.props.navigation.navigate("Guilds");
                        }}
                    >
                        <Text style={styles.buttonText}> My Guilds </Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity
                    style={styles.circle}
                    onPress={() => {
                        this.props.navigation.navigate("Quests");
                    }}
                >
                    <Text style={styles.buttonText}> Quests </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={styles.addIcon}
                        source={{
                            uri:
                                "https://icons-for-free.com/iconfiles/png/512/circle+more+plus+icon-1320183136549593898.png",
                        }}
                    />
                </TouchableOpacity>
                {/* {user.displayName ? (
          <ImageUpload username={user.displayName}></ImageUpload>
        ) : (
          <Text>Sorry you need to login to upload</Text>
        )} */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "flex-end",
        backgroundColor: "#E2CFCA",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
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

    buttonText: {
        color: "white",
    },
});
