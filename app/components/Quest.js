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
import "firebase/firestore";

export default class Quest extends PureComponent {
    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={styles.description}>
                        {this.props.description}
                    </Text>
                    <View style={styles.rewards}>
                        <Image
                            style={{ width: 20, height: 20, marginRight: 3 }}
                            source={require("../assets/coin.png")}
                        />
                        <Text>{this.props.reward}</Text>
                        <Text style={{ marginLeft: 10 }}>EXP: </Text>
                        <Text style={{ marginLeft: 5 }}>
                            {this.props.experience}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#C4C4C4",
        height: 160,
        width: "90%",
        borderRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 35,
        borderWidth: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 10,
    },
    description: {},
    rewards: {
        flexDirection: "row",
        alignContent: "space-around",
        alignSelf: "flex-end",
        marginBottom: 20,
    },
});
