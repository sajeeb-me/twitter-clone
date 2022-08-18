import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

export const postPost = (PostData) =>
  API.post("/post/create", PostData);
export const getAllPost = () => API.get("/post/get");
