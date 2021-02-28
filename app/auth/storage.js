import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const authKey = "authToken";
const pollKey = "pollKey";
const meditationData = "meditationData";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(authKey, authToken);
    console.log(authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(authKey);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(authKey);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const storePoll = async (poll) => {
  try {
    await SecureStore.setItemAsync(pollKey, poll);
    // console.log(authToken);
    console.log(poll);
  } catch (error) {
    console.log("Error storing the poll result", error);
  }
};

const getPoll = async () => {
  try {
    return await SecureStore.getItemAsync(pollKey);
  } catch (error) {
    console.log("Error getting the poll token", error);
  }
};

const storeMeditationId = async (meditation) => {
  try {
    await SecureStore.setItemAsync(meditationData, meditation);
    // console.log(authToken);
    console.log(meditation);
  } catch (error) {
    console.log("Error storing the meditation result", error);
  }
};

const getMeditationId = async () => {
  try {
    return await SecureStore.getItemAsync(meditationData);
  } catch (error) {
    console.log("Error getting the meditationData token", error);
  }
};

export default {
  getToken,
  getUser,
  removeToken,
  storeToken,
  storePoll,
  getPoll,
  storeMeditationId,
  getMeditationId,
};
