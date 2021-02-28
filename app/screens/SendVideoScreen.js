import React, { useState } from "react";
import { StyleSheet, Button, View, Image } from "react-native";
import * as Yup from "yup";
import UploadScreen from "../screens/UploadScreen";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ImageInput from "../components/ImageInput";
import Screen from "../components/Screen";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import axios from "axios";

import uploadApi from "../api/upload";
import apiClient from "../api/client";

// const validationSchema = Yup.object().shape({
//   title: Yup.string().required().min(1).label("Title"),
//   description: Yup.string().label("Description"),
//   videoPlace: Yup.string().required().min(1).label("VideoPlace"),
// });

function SendVideoScreen() {
  const [imageUri, setImageUri] = useState();
  const [video, setVideo] = useState();
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);

  const handleChooseVideo = async () => {
    console.log("handle in send");
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        quality: 1,
      });
      console.log(result);
      if (result.uri) {
        setVideo(result);
        setImageUri(result.uri);
        alert("picked successfully");
      }
    } catch (error) {
      console.log("Error reading a video", error);
    }
  };

  const handleSubmit = async () => {
    console.log(video);

    if (!video) {
      console.log("нет видео то");
      return;
    }
    setUploadVisible(true);
    setProgress(0);
    console.log("отправляем видео");
    console.log(video);

    const result = await uploadApi.addVideo(video);
    if (result.ok) {
      setUploadVisible(false);
      setImageUri(null);
    } else if (result.ok === undefined) {
      setUploadVisible(false);
      setImageUri(null);
    }
    console.log("responseeeeee", result);
  };

  const handleLogOut = () => {
    // console.log("logout");
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          description: "",
          videoPlace: "",
        }}
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
      >
        <AppFormField name="title" placeholder="Title" />
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        {/* <ImageInput
          imageUri={imageUri}
          onChangeImage={handleChooseVideo}
        ></ImageInput> */}

        <Button
          style={styles.container}
          title="Choose Video"
          onPress={handleChooseVideo}
        />
        <SubmitButton title="Post" />
      </AppForm>
      {/* <ListItem
        style={styles.recordVideo}
        title="Record Video"
        IconComponent={<Icon name="logout" backgroundColor="yellow" />}
        onPress={() => navigation.navigate(routes.RECORD_VIDEO)}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  recordVideo: {
    flex: 1,
    justifyContent: "flex-end",
  },
  videoContainer: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "red",
  },
});

export default SendVideoScreen;
