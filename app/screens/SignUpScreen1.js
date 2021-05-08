import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";

export default class SignUpScreen1 extends React.Component {
  state = {
    email: "",
    password: "",
    password2: "",
    errorMessage: "",
  };

  // Firebase signup
  signupHandler = () => {
    const { email, password, password2 } = this.state;

    if (password != password2) {
      this.setState({ errorMessage: "Passwords do not match." });
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => this.setState({ errorMessage: "" }));
      this.props.navigation.navigate("SignUp2");
    }
  };

  render() {
    return (
      <LinearGradient colors={["#FFE9E4", "#ff2e00"]} style={styles.container}>
        <Text style={styles.toptext}>Sign up!</Text>

        {/*Implement Alerts Here}
        {/* {<View style={{ justifyContent: 'center', alignItems: 'center'}}>
          {this.state.errorMessage && <Text style={styles.signuperrortext}>
            {this.state.errorMessage}
          </Text>}
        </View>} */}

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
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
          </View>

          <View style={styles.inputbox}>
            <TextInput
              style={{ textAlign: "center", fontSize: 20 }}
              placeholder="Confirm Password"
              placeholderTextColor="#290907"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(password2) => this.setState({ password2 })}
              value={this.state.password2}
            />
          </View>

          <TouchableOpacity
            style={styles.nextbutton}
            onPress={this.signupHandler}
          >
            <Text style={styles.nextbuttontext}>Next page</Text>
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
  signuperrortext: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
  },
});
