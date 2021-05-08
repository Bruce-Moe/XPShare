import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import * as firebase from 'firebase';
import 'firebase/firestore';
import { CardStyleInterpolators } from "@react-navigation/stack";



export default function ProfileScreen(props) {
  return (
    // Top of userpage - profile pic and user bio
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <Image style={styles.profileimg} source={require("../assets/pfp2.png")}/>
        <View style={styles.biotextbox}>
          <Text style={{fontWeight:'bold', marginBottom: 10, marginTop: 10}}>BBall-and-guitar-man</Text>
          <Text style={styles.profiletext}>This user hasn't created a bio yet. Why don't you check out other parts of their profile?</Text>
        </View>
      </View>

      {/* Middle userpage */}
      <View style={styles.middlecontainer}>

        {/* User skills, guilds info */}
        <View style={styles.infobox}>
          <Text style={{fontSize: 16}}>
            <Text style={{fontWeight: 'bold'}}>Most trained skills: </Text>
            <Text>Basketball, Guitar</Text>
          </Text>
          <Text style={{fontSize: 16, paddingTop: 5}}>
            <Text style={{fontWeight: 'bold'}}>Member of guilds: </Text>
            <Text>BBallAssociation</Text>
          </Text>
        </View>

        {/* User recent posts */}
        <View style={styles.infobox2}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Recent Posts from this User</Text>
          <View style={{height: 340}}>
            <ScrollView>
              <View style={{padding: 20}}>
                <Image style={styles.postimg} source={require("../assets/guitar.jpg")}></Image>
              </View>
              <View style={{padding: 20}}>
                <Image style={styles.postimg} source={require("../assets/bball.jpg")}></Image>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      
      {/* Bottom buttons*/}
      <View style={{flex: 0.1, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
        {/* Back button - bottom left */}
        <View style={{paddingLeft: 15}}>
          <View style={styles.backbutton}>
            <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              >
                <Text
                  style={styles.backbuttontext}
                >
                  ↩ Home
                </Text>
              </TouchableOpacity>
          </View>
        </View>

        {/* Settings button - bottom right */}
        <View style={{paddingRight: 15}}>
          <TouchableOpacity>
            <Image style={styles.settingsbuttonstyle} source={require("../assets/settings.png")}></Image>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE9E4'
  },
  topcontainer: {
    height: 160,
    backgroundColor: '#E2CFCA',
    flexDirection:'row'
  },
  middlecontainer: {
    flex: 1,
  },
  infobox: {
    paddingTop: 15,
    paddingLeft: 30
  },
  infobox2: {
    paddingTop: 20, 
    alignItems: 'center'
  },
  profileimg: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginLeft: 20,
    marginTop: 30,
  },
  biotextbox: {
    margin: 20,
    marginTop: 30, 
    width: 200
  },
  backbutton:{
    backgroundColor: 'gray',
    width: 100,
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  backbuttontext:{
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
  },
  postimg: {
    padding: 20,
    width: 200,
    height: 200,
  },
  settingsbuttonstyle: {
    width: 30,
    height: 30,
  },
});