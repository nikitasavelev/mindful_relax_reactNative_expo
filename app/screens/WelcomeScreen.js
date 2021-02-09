import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

import constants from "../config/constants";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/images/background.jpg")}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Mindful Relax</Text>
      </View>
      {/* <Image source={require('logo!!!')}></Image> */}
      <View style={styles.buttonsContainer}>
        <AppButton
          title={"Login"}
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title={"Register"}
          color="secondaryColor"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // fontFamily: "Montserrat",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  headerText: {
    justifyContent: "center",
    marginTop: 20,
    fontSize: 30,
    color: "black",
    // fontFamily: "Roboto",
  },
  headerContainer: {
    justifyContent: "center",
    position: "absolute",
    top: 5,
  },
});

export default WelcomeScreen;
