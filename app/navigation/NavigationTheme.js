import { DefaultTheme } from "@react-navigation/native";
import constants from "../config/constants";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: constants.mainColor,
    background: "white",
  },
};
