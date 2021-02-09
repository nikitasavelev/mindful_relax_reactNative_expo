import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/images/article1.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Why we meditate so little by...</AppText>
        <ListItem
          image={require("../assets/images/user1.jpeg")}
          title="Nikita"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 180,
  },
  title: {
    fontSize: 18,
    color: "black",
  },
});

export default ListingDetailsScreen;
