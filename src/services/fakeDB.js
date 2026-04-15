const POSTS_KEY = "posts";

export const getPosts = () => {
  return JSON.parse(localStorage.getItem(POSTS_KEY)) || [];
};

export const savePosts = (posts) => {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
};