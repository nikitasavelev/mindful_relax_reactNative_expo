import React, { useContext, useState } from "react";
import { StyleSheet, Image, Text } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

import authApi from "../api/auth";
import AuthContext from "../auth/context";
import storeToken from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [login, setLoginError] = useState(false);

  const handleSubmit = async (userCredentials) => {
    const result = await authApi.login(userCredentials);
    console.log(result);
    if (!result.ok) {
      console.log("нет такого пользователя");
      return setLoginError(true);
    } else {
      setLoginError(false);
      const user = jwtDecode(result.data.access);
      const token = result.data.access;
      authContext.setUser(user);
      storeToken(token);
      console.log(user);
    }
  };

  return (
    <Screen style={styles.container}>
      {/* <Text>Здесь у нас будет ЛОГО</Text> */}
      <Image style={styles.logo}></Image>
      <AppForm
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <>
          <ErrorMessage
            error="Invalid email and/or password."
            visible={login}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="username"
            placeholder="Email"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            secureTextEntry
            placeholder="Password"
          />
          <SubmitButton title="Login" />
        </>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FFF",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
