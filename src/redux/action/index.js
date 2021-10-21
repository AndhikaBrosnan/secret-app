import apiBackend from "../../apis/apiBackend";

export const fetchPosts = async () => {
  try {
    const response = await apiBackend.get("/threads");
    return response.data;
  } catch (err) {
    return {
      message: "[ERROR] Fetch Posts",
    };
  }
};

export const fetchLikes = async () => {
  try {
    const response = await apiBackend.get("/threads/like");
    return response.data;
  } catch (err) {
    return {
      message: "[ERROR] Fetch Like",
    };
  }
};
