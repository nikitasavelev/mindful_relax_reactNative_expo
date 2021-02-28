import React, { Component, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";

export default function MeditationInformation() {
  const [result, setResult] = useState(null);
  const informationURI =
    "http://mindfulrelax.ru/api/v1/me/meditation_attachments/1/result/Meditation_For_Inner_Peace_-_Yoga_With_Adriene-heatmap_WbH0bvi-graph.html";

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "http://mindfulrelax.ru/api/v1/me/meditation_attachments/1/result/Meditation_For_Inner_Peace_-_Yoga_With_Adriene-heatmap_WbH0bvi-graph.html"
    );
    setResult(result);
  };

  return (
    <WebView
      style={styles.backgroundInfo}
      source={{
        uri:
          "http://mindfulrelax.ru/api/v1/me/meditation_attachments/1/result/Meditation_For_Inner_Peace_-_Yoga_With_Adriene-heatmap_WbH0bvi-graph.html",
      }}
      mixedContentMode="always"
    />
    // <View style={styles.container}>
    //   <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
    //   <Text>{result && JSON.stringify(result)}</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  backgroundInfo: {
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
