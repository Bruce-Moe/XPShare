import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, StackNavigator } from "@react-navigation/native";

import { Image, StyleSheet, View, Text } from "react-native";
import React, { PureComponent } from "react";

import LogInScreen from "../screens/LogInScreen";

const LogInStack = createStackNavigator();
const HomeStack = createStackNavigator();

class Navigation extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.LogInNavigation = this.LogInNavigation.bind(this);
    }

    LogInNavigation = (logInProps) => {
        return (
            <LogInStack.Screen name="Login">
                {(props) => <Login {...props} login={logInProps.login} />}
            </LogInStack.Screen>
        );
    };

    HomeNavigation = (homeProps) => {
        return (
            <HomeStack.Navigator initialRoute="Home">
                <HomeStack.Screen name="Home" />
                <HomeStack.Screen name="Quests" />
            </HomeStack.Navigator>
        );
    };
}
