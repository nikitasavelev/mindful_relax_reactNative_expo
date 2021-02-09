import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";

function ListItem({ title, image, IconComponent, subTitle, onPress }) {
  return (
    <TouchableHighlight underlayColor={"#f8f4f4"} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.textContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subTitle && (
            <AppText style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </AppText>
          )}
        </View>
        <MaterialCommunityIcons name="chevron-right" size={25} />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#fcfafa",
  },
  title: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  subTitle: {
    color: "#6e6969",
    fontSize: 11,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default ListItem;
