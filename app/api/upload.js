import client from "./client";

const addVideo = async (videoObject) => {
  const headers = {
    "Content-Type":
      "multipart/form-data; boundary=<calculated when request is sent>",
  };
  console.log("videoobject", videoObject);

  let uri = videoObject.uri.split("/");
  let name = uri[uri.length - 1];

  console.log("name", name);

  const data = new FormData();
  data.append("attachment", {
    name: name,
    type: "video/mp4",
    uri: videoObject.uri,
  });
  data.append("meditation", 1);
  data.append("attachment_type", 1);

  return client.post("/meditation/video/create/", data);
};

export default {
  addVideo,
};
