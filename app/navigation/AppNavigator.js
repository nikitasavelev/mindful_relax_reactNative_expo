import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SendVideoScreen from "../screens/SendVideoScreen";
import ArticlesScreen from "../screens/ArticlesScreen";
import RecordVideoScreen from "../screens/RecordVideoScreen";
import NewVideoButton from "./NewVideoButton";
import RecordVideoButton from "./RecordVideoButton";
import routes from "./routes";
import AccountNavigator from "./AccountNavigator";
import AudioGuideScreen from "../screens/AudioGuideScreen";
import * as Permissions from "expo-permissions";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // console.log(user);
  // useEffect(() => {
  //   registerForPushNotifications();
  // }, []);

  // const registerForPushNotifications = async () => {
  //   try {
  //     const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  //     if (!permission.granted) return;

  //     const token = await Notifications.getExpoPushTokenAsync();
  //     console.log(token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.AUDIO}
        component={AudioGuideScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="audio-video"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ADD_VIDEO}
        component={SendVideoScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewVideoButton
              onPress={() => navigation.navigate(routes.ADD_VIDEO)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.RECORD_VIDEO}
        component={RecordVideoScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <RecordVideoButton
              onPress={() => navigation.navigate(routes.RECORD_VIDEO)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="controller-record"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name={"account"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
