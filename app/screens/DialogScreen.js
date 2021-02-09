import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSepartor from "../components/ListItemSepartor";
import Screen from "../components/Screen";
// import { messages } from "../config/dummydata";

const messages = [
  {
    id: 1,
    title:
      "alotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalotalot",
    description: "D1",
    image: require("../assets/images/user1.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/images/user2.jpg"),
  },
];

function DialogScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            subTitle={item.description}
            onPress={() => console.log("Message Selected")}
          />
        )}
        ItemSeparatorComponent={ListItemSepartor}
      />
    </Screen>
  );
}

export default DialogScreen;
