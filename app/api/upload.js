import client from "./client";

const addVideo = async (videoObject) => {
  const headers = {
    "Content-Type": "multipart/form-data; ",
  };
  console.log("videoobject", videoObject);

  const data = new FormData();
  data.append("attachment", {
    name: "mobile-video-upload",
    type: "video/mp4",
    uri: videoObject.uri,
  });
  data.append("meditation", 1);
  data.append("attachment_type", 1);

  return client.post("/meditation/video/create/", data, {
    headers: headers,
  });
};

export default {
  addVideo,
};
