import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

export default class LogInScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null,
    };

    // Firebase login
    loginHandler = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                if (response.user != null) {
                    this.props.navigation.navigate("Home");
                }
            })
            .catch((error) => {
                this.setState({
                    errorMessage:
                        "Error logging in. Did you use the right credentials?",
                });
                console.log(error);
            });
    };

    DismissKeyboard = ({ children }) => (
        // console.log(children)
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {" "}
            {children}
        </TouchableWithoutFeedback>
    );

    render() {
        return (
            <LinearGradient
                colors={["#FFE9E4", "#ff2e00"]}
                style={styles.container}
            >
                <View style={{ padding: 30 }}>
                    <Image
                        style={styles.logo}
                        source={require("../assets/logo.png")}
                    />
                </View>

                {/* <Text style={styles.slogantext}>This is our slogan!</Text> */}

                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    {this.state.errorMessage && (
                        <Text style={styles.loginerrortext}>
                            {this.state.errorMessage}
                        </Text>
                    )}
                </View>

                <View style={{ padding: 10 }}>
                    <View style={styles.inputbox}>
                        <TextInput
                            style={{ textAlign: "center", fontSize: 20 }}
                            placeholder="E-mail"
                            placeholderTextColor="#290907"
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                        />
                    </View>

                    <View style={styles.inputbox}>
                        <TextInput
                            style={{ textAlign: "center", fontSize: 20 }}
                            placeholder="Password"
                            placeholderTextColor="#290907"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(password) =>
                                this.setState({ password })
                            }
                            value={this.state.password}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.nextbutton}
                    onPress={this.loginHandler}
                >
                    <Text style={styles.nextbuttontext}>Log In</Text>
                </TouchableOpacity>

                <View style={{ paddingTop: 20, flexDirection: "row" }}>
                    <Text style={{ color: "white" }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("SignUp1");
                        }}
                    >
                        <Text style={styles.signuptext}> Sign up!</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 150,
        height: 150 * 1.111,
    },
    slogantext: {
        color: "white",
        fontSize: 30,
        justifyContent: "center",
        paddingBottom: 20,
    },
    inputbox: {
        justifyContent: "center",
        backgroundColor: "white",
        width: 300,
        height: 50,
        borderRadius: 20,
        margin: 10,
    },
    signuptext: {
        color: "#290907",
        fontWeight: "600",
    },
    nextbutton: {
        justifyContent: "center",
        backgroundColor: "#290907",
        width: 300,
        height: 50,
        borderRadius: 20,
    },
    nextbuttontext: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
    },
    loginerrortext: {
        textAlign: "center",
        color: "red",
        fontSize: 18,
        fontWeight: "bold",
        padding: 5,
    },
});
