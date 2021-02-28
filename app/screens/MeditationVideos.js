"use strict";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
  Button,
} from "react-native";
import getVideos from "../api/getVideos";
// import { Video, AVPlaybackStatus } from "expo-av";
import VideoPlayer from "expo-video-player";
import { Video } from "expo-av";
// import { WebView } from "react-native-webview";
// import Video from "react-native-video";

// uri:
// "http://mindfulrelax.ru/api/v1/me/meditation_attachments/1/result/Meditation_For_Inner_Peace_-_Yoga_With_Adriene-heatmap_WbH0bvi-graph.html",
// }}

export default class VideoOverview extends Component {
  videoError() {
    console.log("error");
  }

  onBuffer() {
    console.log("buffering");
  }

  handleLoaded() {
    console.log("loading");
  }
  _onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
    } else {
      console.log(status);
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  _onLoad = (status) => {
    console.log(`ON LOAD : ${JSON.stringify(status)}`);
  };

  _onError = (error) => {
    console.log(`ON ERROR : ${error}`);
  };

  // videoUri =
  //   "http://mindfulrelax.ru/api/v1/me/meditation_attachments/1/video/mobile-video-upload_RNVBaLL";

  videoLocalUri = require("../assets/video/video.mp4");

  render() {
    return (
      <Video
        source={this.videoLocalUri}
        onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
        resizeMode="cover"
        useNativeControls
        style={{ width: 300, height: 300 }}
        onLoad={this._onLoad}
        onError={this._onError}
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  // container: {
  //   flex: 1,
  //   justifyContent: "flex-start",
  // },
  // headline: {
  //   alignSelf: "center",
  //   fontSize: 18,
  //   marginTop: 10,
  //   marginBottom: 30,
  // },
  // videoTile: {
  //   alignSelf: "center",
  //   fontSize: 16,
  //   marginTop: 15,
  // },
});
