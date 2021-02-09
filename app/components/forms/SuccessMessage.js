import React from "react";
import { StyleSheet, Text } from "react-native";

import AppText from "../AppText";

function SuccessMessage({ success, visible }) {
  if (!visible || !success) return null;
  return <AppText style={styles.success}>{success}</AppText>;
}

const styles = StyleSheet.create({
  success: { color: "green" },
});

export default SuccessMessage;
