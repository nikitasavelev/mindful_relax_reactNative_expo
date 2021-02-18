import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

import uploadApi from "../api/upload";

class MyCam extends Component {
  state = {
    video: null,
    picture: null,
    recording: false,
    cameraType: Camera.Constants.Type.front,
  };

  _saveVideo = async () => {
    const { video } = this.state;
    const result = await uploadApi.addVideo(video);
    console.log(result);
  };

  sendVideoToServer() {
    const { video } = this.state;

    console.log("video", video);
  }

  _StopRecord = async () => {
    const { video } = this.state;
    console.log("stop", video);
    this.setState({ recording: false }, () => {
      this.cam.stopRecording();
    });

    // this.sendVideoToServer();
  };

  _StartRecord = async () => {
    if (this.cam) {
      this.setState({ recording: true }, async () => {
        const video = await this.cam.recordAsync();
        this.setState({ video });
      });
    }
  };

  _switchCamera = async () => {
    if (this.state.cameraType === "back") {
      this.state.cameraType = "front";
    } else {
      this.state.cameraType = "back";
    }
  };

  toogleRecord = () => {
    const { recording } = this.state;

    if (recording) {
      this._StopRecord();
    } else {
      this._StartRecord();
    }
  };

  render() {
    const { recording, video, cameraType } = this.state;
    return (
      <Camera
        type={cameraType}
        ref={(cam) => (this.cam = cam)}
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1,
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={this._switchCamera}
          style={{
            marginTop: 20,
            height: 25,
            width: 25,
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {cameraType === "front" ? "back" : "front"}
          </Text>
        </TouchableOpacity>
        {video && (
          <TouchableOpacity
            onPress={this._saveVideo}
            style={{
              padding: 20,
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ textAlign: "center" }}>save</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={this.toogleRecord}
          style={{
            padding: 20,
            width: "100%",
            backgroundColor: recording ? "#ef4f84" : "#4fef97",
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {recording ? "Stop" : "Record"}
          </Text>
        </TouchableOpacity>
      </Camera>
    );
  }
}

class RecordVideoScreen extends Component {
  state = {
    showCamera: false,
  };

  _showCamera = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL,
      Permissions.AUDIO_RECORDING
    );
    console.log(status);

    if (status === "granted") {
      this.setState({ showCamera: true });
    }
  };

  render() {
    const { showCamera } = this.state;
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          width: "100%",
        }}
      >
        {showCamera ? (
          <MyCam />
        ) : (
          <TouchableOpacity onPress={this._showCamera}>
            <Text> Show Camera </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default RecordVideoScreen;
