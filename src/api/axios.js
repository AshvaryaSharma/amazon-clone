import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:5001/clone-webapp-c17f3/us-central1/api", // the cloud function url

  baseURL: "https://us-central1-clone-webapp-c17f3.cloudfunctions.net/api",
});

export default instance;