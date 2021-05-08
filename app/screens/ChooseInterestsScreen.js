import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from "react-native-gesture-handler";


export default function ChooseInterestsScreen(props) {
  return ( 
    <LinearGradient colors={["#FFE9E4", "#ff2e00"]} style={styles.container}>
      <Text style={styles.toptext}>Choose your skills!</Text>
      <View style={styles.searchbar}>
        <TextInput
          style={{ color: "#290907", textAlign: "center", fontSize: 20 }}
          placeholder="Search..."
          placeholderTextColor="#290907"
        ></TextInput>
      </View>

      <ScrollView style={{height: 300}}>
        <Image source={require("../assets/gaming.jpg")} style={styles.img}/>
        <View style={styles.imgcaption}>
          <Text style={styles.imgcaptiontext}>Gaming</Text>
        </View>

        <Image source={require("../assets/bball.jpg")} style={styles.img}/>
        <View style={styles.imgcaption}>
          <Text style={styles.imgcaptiontext}>Basketball</Text>
        </View>

        <Image source={require("../assets/gardening.jpg")} style={styles.img}/>
        <View style={styles.imgcaption}>
          <Text style={styles.imgcaptiontext}>Gardening</Text>
        </View>

        <Image source={require("../assets/reading.jpg")} style={styles.img}/>
        <View style={styles.imgcaption}>
          <Text style={styles.imgcaptiontext}>Reading</Text>
        </View>
      </ScrollView>

      {/* <View style={{ height: 400 }}>
        <FlatList>
          <Image source={require("../assets/gaming.jpg")} style={styles.img}/>
        </FlatList>
      </View>
      */}

      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Text
            style={{
              color: "#290907",
              fontSize: 18,
              fontWeight: 'bold',
              textDecorationLine: "underline",
              marginBottom: 40,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  imgcaption: {
    marginBottom: 10,
  },
  imgcaptiontext: {
    color: '#290907', 
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  toptext: {
    color: "#290907",
    fontSize: 36,
    justifyContent: "center",
    paddingBottom: 10,
    marginTop: 40,
  },
  searchbar: {
    justifyContent: "center",
    backgroundColor: "white",
    width: 300,
    height: 40,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 30
  },
});
