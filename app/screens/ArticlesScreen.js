import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Article from "../components/Article";
import Screen from "../components/Screen";

import constants from "../config/constants";

const articles = [
  {
    id: 1,
    title: "Why we meditate so little",
    description: "our first article",
    image: require("../assets/images/med1.jpg"),
  },
  {
    id: 2,
    title: "Using battleship with meditation, is it real?",
    description: "No its not",
    image: require("../assets/images/med2.jpg"),
  },
];

function ArticlesScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={articles}
        keyExtractor={(article) => article.id.toString()}
        renderItem={({ item }) => (
          <Article
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
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

export default ArticlesScreen;
