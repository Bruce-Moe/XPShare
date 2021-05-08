import React, { PureComponent, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    Platform,
    ScrollView,
} from "react-native";
import * as firebase from "firebase";
import { firebaseConfig } from "../../App";
import "firebase/firestore";
import BottomNavigator from "../components/BottomNavigator";

// Intialize database
// const app = firebase.initializeApp({ firebaseConfig });

// const db = app.firestore();

export default function Skills(props) {
    // const app = this.props.app;
    // const db = app.firestore();
    // console.log(db);
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
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("Home");
                            }}
                        >
                            <Text style={styles.statusText}>Home</Text>
                        </TouchableOpacity>
                        <Text style={styles.statusText}>Guilds</Text>
                    </View>
                </View>
            </View>
            <View style={styles.panel}>
                <View style={styles.panelView}>
                    <Image
                        style={{
                            width: 75,
                            height: 75,
                        }}
                        source={{
                            uri:
                                "https://cdn2.iconfinder.com/data/icons/activity-5/50/1F3C0-basketball-512.png",
                        }}
                    />
                    <Text
                        style={{
                            marginLeft: "5%",
                            fontSize: 35,
                        }}
                    >
                        {" "}
                        Basketball{" "}
                    </Text>
                </View>
            </View>
            <View style={styles.panel}>
                <View style={styles.panelView}>
                    <Image
                        style={{
                            width: 75,
                            height: 75,
                        }}
                        source={{
                            uri:
                                "https://image.flaticon.com/icons/png/512/96/96421.png",
                        }}
                    />
                    <Text
                        style={{
                            marginLeft: "5%",
                            fontSize: 35,
                        }}
                    >
                        {" "}
                        Guitar{" "}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flex: 3,
                    backgroundColor: "#F6F0ED",
                    borderBottomColor: "grey",
                    borderBottomWidth: 0.5,
                }}
            ></View>
            <View style={{ flex: 0.7 }}>
                <BottomNavigator
                    navigation={props.navigation}
                ></BottomNavigator>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topFormat: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    addIcon: {
        width: 50,
        height: 50,
    },
    buttonText: {
        color: "white",
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
    container: {
        flex: 1,
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#F6F0ED",
    },
    panel: {
        flex: 1,
        backgroundColor: "white",
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    bottomBar: {
        flex: 0.75,
        backgroundColor: "#E2CFCA",
    },
    panelView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "5%",
    },
    bottomContainer: {
        flex: 0.5,
        //justifyContent: "flex-end",
        backgroundColor: "#E2CFCA",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    topContainer: {
        flex: 0.5,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#E2CFCA",
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
    },
    top: {
        flex: 0.75,
    },
    notifFormat: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    notifIcon: {
        width: 25,
        height: 25,
        top: "2.5%",
    },
    statusText: {
        textDecorationLine: "underline",
        fontSize: 30,
        fontWeight: "600",
    },
});
