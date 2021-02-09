import React from "react";
import { View, StyleSheet } from "react-native";

function ListItemSepartor(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#f8f4f4",
  },
});

export default ListItemSepartor;
