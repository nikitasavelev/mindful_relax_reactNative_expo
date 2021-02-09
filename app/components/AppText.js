import React from "react";
import { Text, StyleSheet } from "react-native";
import constants from "../config/constants";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";

function AppText({ children, style, ...otherProps }) {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
});

export default AppText;
