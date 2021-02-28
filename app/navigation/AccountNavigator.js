import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import AccountScreen from "../screens/AccountScreen";
import DialogScreen from "../screens/DialogScreen";
import GamificationScreen from "../screens/GamificationScreen";
import AchievementsScreen from "../screens/AchievementsScreen";
import VideoOverview from "../screens/MeditationVideos";
import MeditationInfo from "../screens/MeditationInformation";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.DIALOG} component={DialogScreen} />
    <Stack.Screen name={routes.GAMIFICATION} component={GamificationScreen} />
    <Stack.Screen name={routes.ACHIEVEMENTS} component={AchievementsScreen} />
    <Stack.Screen name={routes.VIDEOS} component={VideoOverview} />
    <Stack.Screen name={routes.MEDITATION_INFO} component={MeditationInfo} />
  </Stack.Navigator>
);

export default AccountNavigator;
