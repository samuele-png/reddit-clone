export const addPosts = ({ subId, postId, userId, content }) => ({
  type: "posts/add",
  payload: {
    userId,
    postId,
    content,
    subId
  },
});
