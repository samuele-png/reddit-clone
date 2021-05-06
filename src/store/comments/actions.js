export const addComments = ({ subId, postId, userId, content }) => ({
    type: "comments/add",
    payload: {
      userId,
      postId,
      content,
      subId
    },
  });
  