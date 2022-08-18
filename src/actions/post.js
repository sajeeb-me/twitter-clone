import * as api from "../api";

export const createPost = (PostData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postPost(PostData);
    dispatch({ type: "CREATE_POST", payload: data });
    dispatch(fetchAllPosts());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllPost();
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};