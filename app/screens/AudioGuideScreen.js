import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import NativeForms, { NativeFormsModal } from "native-forms";
import ActivityIndicator from "../components/ActivityIndicator";

import authStorage from "../auth/storage";

function AudioGuideScreen(props) {
  const [hasForm, showForm] = useState(true);

  const geee = authStorage.getPoll();
  console.log(geee);

  return (
    <Screen style={styles.container}>
      {/* <ActivityIndicator visible={true} /> */}
      {hasForm && (
        <NativeFormsModal
          form="https://my.nativeforms.com/kJTaM1jZmEmbFNjUo1Db"
          onClose={() => showForm(false)}
          onSend={(formData) => {
            console.log("Completed form data", formData);
            authStorage.storePoll(formData);
          }}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AudioGuideScreen;
