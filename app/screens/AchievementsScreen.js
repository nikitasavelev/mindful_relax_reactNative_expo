import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Achievement from "../components/Achievement";
import Screen from "../components/Screen";

import constants from "../config/constants";

const achievements = [
  {
    id: 1,
    title: "Meditate first time",
    description: "Congratz!",
  },
  {
    id: 2,
    title: "Fulfill questioner",
    description: "Thanks you are really big help to us",
  },
];

function AchievementsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={achievements}
        keyExtractor={(achievement) => achievement.id.toString()}
        renderItem={({ item }) => (
          <Achievement title={item.title} subTitle={item.description} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: constants.lightColor,
  },
});

export default AchievementsScreen;
