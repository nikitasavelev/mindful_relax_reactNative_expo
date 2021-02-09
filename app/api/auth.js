import client from "./client";

const login = (userCredentials) =>
  client.post("/auth/jwt/create/", userCredentials);

const register = (userInfo) => client.post("/auth/users/", userInfo);

export default {
  login,
  register,
};
