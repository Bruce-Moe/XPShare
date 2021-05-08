import React, { useState, PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Slider from "@react-native-community/slider";

//const [sliderValue, setSliderValue] = useState(15);

export default class post extends PureComponent {
  constructor(pfp, imageURL, username, guild, caption) {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        {/*Post Header*/}
        <View style={styles.postInfo}>
          <View style={styles.profileFormat}>
            <Image
              style={styles.profileIcon}
              source={{ uri: this.props.pfp }}
            />
            {/* <Avatar
              //style={styles.profileIcon}
              source={require("../../assets/pfp.png")}
            /> */}
            <View style={styles.pfpInfoFormat}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={styles.usernameText}>{this.props.username}</Text>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    marginRight: "8%",
                  }}
                >
                  <Image
                    style={styles.reportIcon}
                    source={{
                      uri:
                        "https://image.flaticon.com/icons/png/512/179/179386.png",
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.usernameText}>Guild: {this.props.guild}</Text>
            </View>
          </View>
        </View>
        {/*Post Body*/}
        <View style={styles.post}>
          <View style={styles.center}>
            <Image
              style={styles.postImage}
              source={{ uri: this.props.imageURL }}
            />
          </View>
        </View>
        {/*Post Footer*/}
        <View style={styles.postActions}>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
            }}
          >
            <View style={styles.comment}>
              <Text style={styles.user}> {this.props.username}</Text>
              <Text style={styles.caption}> {this.props.caption}</Text>
            </View>

            <TouchableOpacity
              style={{
                alignItems: "flex-end",
                marginRight: "2%",
              }}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                }}
                source={{
                  uri:
                    "https://icons-for-free.com/iconfiles/png/512/comment-131965017416332557.png",
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text style={styles.user}>
              {" "}
              Award [{this.props.skill}] experience to this post:{" "}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Slider
              style={{
                marginTop: 20,
                marginBottom: -50,
                width: 200,
                height: 40,
              }}
              minimumValue={0}
              maximumValue={10}
              step={1}
              //value={sliderValue}
              //onValueChange={(sliderValue) => setSliderValue(sliderValue)}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alignEnd: {
    flex: 1,
    alignItems: "flex-end",
  },
  reportIcon: {
    //marginLeft: "50%",
    width: 20,
    height: 20,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  caption: {
    fontSize: 15,
  },
  container: {
    flexDirection: "column",
    flex: 1,
  },
  comment: {
    //paddingTop: 10,
    paddingLeft: 10,
    flexDirection: "row",
    flex: 1,
  },
  user: {
    fontWeight: "bold",
    fontSize: 15,
  },
  profileFormat: {
    flex: 1,
    left: "5%",
    flexDirection: "row",
    alignItems: "center",
  },
  pfpInfoFormat: {
    flex: 1,
    marginLeft: 10,
  },
  usernameText: {
    top: "-2.5%",
    fontSize: 20,
  },
  profileIcon: {
    width: 75,
    height: 75,
  },
  postInfo: {
    backgroundColor: "#F6F0ED",
    flex: 1.1,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  post: {
    flex: 6,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  postImage: {
    width: 200,
    height: 200,
  },
  postActions: {
    flexDirection: "column",
    backgroundColor: "#F6F0ED",
    flex: 2,
    paddingBottom: 100,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  row: {
    flexDirection: "row",
  },
});
