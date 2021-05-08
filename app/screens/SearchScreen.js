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

// Intialize database
// const app = firebase.initializeApp({ firebaseConfig });

// const db = app.firestore();

import People from "../components/SearchScreen/People";
import Skills from "../components/SearchScreen/Skills";
import Guilds from "../components/SearchScreen/Guilds";

export default class SearchScreen extends PureComponent {
    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        const app = this.props.app;
        const db = app.firestore();
        console.log(db);
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchBar}
                    autoFocus={true}
                    onChangeText={(currentQuery) => {
                        this.setState({ currentQuery });
                        console.log(this.state.currentQuery);
                    }}
                ></TextInput>
                <People name="Jane Doe" guild="xyz" skills="aaa" />
                <Skills
                    name="Basketball"
                    topPlayer="Lebron James"
                    topGuild="Mavs"
                />
                <Guilds
                    memberCount={1000}
                    skills={["CoD", "Fortnite"]}
                ></Guilds>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#F6F0ED",
    },
    searchBar: {
        backgroundColor: "white",
        marginTop: "3%",
        marginHorizontal: 30,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.3)",
    },
});
