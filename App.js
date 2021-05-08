//Import navigation
import "react-native-gesture-handler";
import React from "react";
// Import screens
import LogInScreen from "./app/screens/LogInScreen";
import SignUpScreen1 from "./app/screens/SignUpScreen1";
import SignUpScreen2 from "./app/screens/SignUpScreen2";
import ChooseInterestsScreen from "./app/screens/ChooseInterestsScreen";
import HomeScreen from "./app/screens/HomeScreen";
import SearchScreen from "./app/screens/SearchScreen";
import QuestsScreen from "./app/screens/QuestsScreen";
import Navigation from "./app/navigation/Navigation";
import SkillsScreen from "./app/screens/Skills";
import GuildsScreen from "./app/screens/Guilds";
import ProfileScreen from "./app/screens/ProfileScreen";
// Import firebase
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBrf03-fk0UyK_UyIcGjghN6OMhPiGhEwo",
    authDomain: "rlmmo-1d6ee.firebaseapp.com",
    databaseURL: "https://rlmmo-1d6ee.firebaseio.com",
    projectId: "rlmmo-1d6ee",
    storageBucket: "rlmmo-1d6ee.appspot.com",
    messagingSenderId: "277553134237",
    appId: "1:277553134237:web:8cec0a162f679ce91b7274",
    measurementId: "G-NF0W5C8CS2",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

const Stack = createStackNavigator();

export default function App() {
    console.disableYellowBox = true;
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LogInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp1"
                    component={SignUpScreen1}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp2"
                    component={SignUpScreen2}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Interests"
                    component={ChooseInterestsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Search" options={{ headerShown: false }}>
                    {(props) => <SearchScreen {...props} app={app} />}
                </Stack.Screen>
                <Stack.Screen
                    name="Skills"
                    component={SkillsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Guilds"
                    component={GuildsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Quests"
                    component={QuestsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
