import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import constants from "../config/constants";

function AppButton({ title, onPress, color = "mainColor" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: constants[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: constants.mainColor,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 2,
  },
  text: {
    color: "#fff",
    fontSize: 12,
    textTransform: "uppercase",
  },
});

export default AppButton;
