import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://mindfulrelax.ru/api/v1",
});

export default apiClient;
