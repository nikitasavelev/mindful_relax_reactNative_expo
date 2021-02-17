import client from "./client";

const getVideos = async () => {
  //   const headers = {
  //     "Content-Type": "multipart/form-data; ",
  //   };
  //   console.log("videoobject", videoObject);

  //   const data = new FormData();
  //   data.append("attachment", {
  //     name: "mobile-video-upload",
  //     type: "video/mp4",
  //     uri: videoObject.uri,
  //   });
  //   data.append("meditation", 1);
  //   data.append("attachment_type", 1);

  return client.get("/api/v1/meditation/analysis/?pk=1");
};

export default {
  getVideos,
};
