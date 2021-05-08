import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SnapshotViewIOSComponent,
} from "react-native";
import Post from "../components/SearchScreen/post";
import ImageUpload from "../components/imageUpload";
import { db, storage } from "../../App";
import firebase from "firebase";
import { app } from "firebase";

export default function HomeScreen(props) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref("images/" + image.name).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageURL: url,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <View>
      <progress value={progress} max="100"></progress>
      <TextInput
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
      ></TextInput>
      {/*Must change input type*/}
      {<input type="file" onChange={handleChange}></input>}
      {
        <TouchableOpacity onPress={handleUpload}>
          <Text>Upload</Text>
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({});
