import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import constants from "../config/constants";

function NewVideoButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color="white" size={30} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: constants.mainColor,
    borderColor: "white",
    borderWidth: 5,
    bottom: 15,
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});

export default NewVideoButton;
