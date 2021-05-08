import React, { useState, PureComponent } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
} from "react-native";

export default class People extends PureComponent {
    constructor(props) {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerStyling}>Skills</Text>
                <View style={styles.dividerStyling} />
                <Text style={styles.textStyling}>{this.props.name}</Text>
                <Text style={styles.textStyling}>
                    Top Player: {this.props.topPlayer}
                </Text>
                <Text style={styles.textStyling}>
                    Top Guild: {this.props.topGuild}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
    },
    headerStyling: {
        fontSize: 40,
        fontWeight: "600",
        paddingLeft: 10,
    },
    dividerStyling: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "60%",
        paddingLeft: 0,
    },
    textStyling: {
        fontSize: 20,
        paddingLeft: 10,
    },
});
