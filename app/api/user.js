import client from "./client";

const getUserById = (userId) => client.get("auth/users/" + userId);

export default {
  getUserById,
};
