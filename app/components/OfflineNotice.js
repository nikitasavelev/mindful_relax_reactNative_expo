import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: 50,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: "white",
  },
});

export default OfflineNotice;
