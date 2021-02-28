import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSepartor from "../components/ListItemSepartor";
import Screen from "../components/Screen";
import constants from "../config/constants";
import routes from "../navigation/routes";

import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const menuItems = [
  {
    title: "Gamification",
    icon: {
      name: "file-video",
      backgroundColor: constants.mainColor,
    },
    targetScreen: routes.GAMIFICATION,
  },
  {
    title: "My Saved Articles",
    icon: {
      name: "card-text",
      backgroundColor: constants.secondaryColor,
    },
  },
  {
    title: "My Achievemnts",
    icon: {
      name: "star",
      backgroundColor: constants.mainColor,
    },
    targetScreen: routes.ACHIEVEMENTS,
  },
  {
    title: "My Dialogs",
    icon: {
      name: "account",
      backgroundColor: constants.secondaryColor,
    },
    targetScreen: routes.DIALOG,
  },
  {
    title: "Meditation videos",
    icon: {
      name: "video",
      backgroundColor: constants.darkGreyColor,
    },
    targetScreen: routes.VIDEOS,
  },
  {
    title: "Meditation information",
    icon: {
      name: "information",
      backgroundColor: constants.darkGreyColor,
    },
    targetScreen: routes.MEDITATION_INFO,
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    // console.log("logout");
    setUser(null);
    authStorage.removeToken();
  };

  const userEmail = () => {
    if (!user) {
      return "standartEmail";
    } else {
      return user.email;
    }
  };
  const userName = "User";

  return (
    <Screen style={styles.screen}>
      <View style={styles.screen}>
        <ListItem title={userName} subTitle={userEmail()} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSepartor}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        style={styles.logOut}
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="yellow" />}
        onPress={handleLogOut}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: constants.lightColor,
  },
  container: {
    marginVertical: 10,
    flex: 1,
  },
  logOut: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default AccountScreen;
