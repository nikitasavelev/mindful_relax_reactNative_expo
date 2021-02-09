import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import Icon from "./Icon";

function Achievement({ title, subTitle }) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>

      <Icon style={styles.icon} name="towing" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
  },
  textWrapper: {
    flexDirection: "column",
  },
  title: {
    fontSize: 14,
    color: "black",
    padding: 3,
  },
  subTitle: {
    fontSize: 9,
    paddingLeft: 5,
  },
  icon: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingBottom: 5,
    paddingRight: 10,
  },
});

export default Achievement;
