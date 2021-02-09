import React, { useState } from "react";
import { StyleSheet, Image, Text } from "react-native";
import * as Yup from "yup";
import { Redirect, Route } from "react-router";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
} from "../components/forms";
import Screen from "../components/Screen";

import authApi from "../api/auth";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  Name: Yup.string().required().label("Name"),
  Email: Yup.string().required().email().label("Email"),
  Password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [register, setRegisterError] = useState(false);
  const [sucess, setSuccessMessage] = useState(false);

  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
    userInfo.username = userInfo.email;

    const result = await authApi.register(userInfo);
    if (!result.ok) {
      console.log("something wrong");
      console.log(result);
      return setRegisterError(true);
    } else if (result.ok) {
      setRegisterError(false);
      setSuccessMessage(true);
      Route.Redirect;
    }
  };

  return (
    <Screen style={styles.container}>
      <Text>Здесь у нас будет ЛОГО</Text>
      <Image style={styles.logo}></Image>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <>
          <ErrorMessage
            error="Such user is already exists!"
            visible={register}
          />
          <SuccessMessage
            success="Your register is success!"
            visible={sucess}
          />
          {/* <AppFormField
            autoCorrect={false}
            icon="account"
            name="username"
            placeholder="Name"
          /> */}
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
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
          <SubmitButton title="Register" />
        </>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;
