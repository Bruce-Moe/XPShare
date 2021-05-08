import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUpScreen2(props) {
    return (
        <LinearGradient
            colors={["#FFE9E4", "#ff2e00"]}
            style={styles.container}
        >
            <Text style={styles.toptext}>Sign up!</Text>

            <View style={{ padding: 10 }}>
                <View style={styles.inputbox}>
                    <TextInput
                        style={{ textAlign: "center", fontSize: 20 }}
                        placeholder="First Name"
                        placeholderTextColor="#290907"
                    />
                </View>

                <View style={styles.inputbox}>
                    <TextInput
                        style={{ textAlign: "center", fontSize: 20 }}
                        placeholder="Last Name"
                        placeholderTextColor="#290907"
                    />
                </View>

                <View style={styles.inputbox}>
                    <TextInput
                        style={{ textAlign: "center", fontSize: 20 }}
                        placeholder="Username"
                        placeholderTextColor="#290907"
                        autoCapitalize="none"
                    />
                </View>

                <TouchableOpacity
                    style={styles.nextbutton}
                    onPress={() => {
                        props.navigation.navigate("Interests");
                    }}
                >
                    <Text style={styles.nextbuttontext}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    toptext: {
        color: "#290907",
        fontSize: 40,
        justifyContent: "center",
        paddingBottom: 10,
    },
    inputbox: {
        justifyContent: "center",
        backgroundColor: "white",
        width: 300,
        height: 50,
        borderRadius: 20,
        margin: 10,
    },
    nextbutton: {
        justifyContent: "center",
        backgroundColor: "#290907",
        width: 300,
        height: 50,
        borderRadius: 20,
        margin: 10,
    },
    nextbuttontext: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
    },
});
