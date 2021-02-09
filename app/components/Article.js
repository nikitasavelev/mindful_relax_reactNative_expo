import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";

function Article({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
      <MaterialCommunityIcons
        name="heart"
        size={20}
        style={styles.icon}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    // backgroundColor: "#fff",
    marginBottom: 10,
    overflow: "hidden",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 100,
  },
  title: {
    fontSize: 18,
    color: "black",
    padding: 3,
  },
  subTitle: {
    fontSize: 12,
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

export default Article;
