export default function reducer(
  state = {
    myComment: [{
        
            userId: 1,
            postId: 4,
            content:"porcodioilcomnment",
            commentId: 1,
            subId: "react",
          },
          {
        
            userId: 1,
            postId: 2,
            content:"porcodioilcomnment",
            commentId: 2,
            subId: "askreddit",
          },
          {
        
            userId: 1,
            postId: 1,
            content:"porcodioilcomnment",
            commentId: 3,
            subId: "askreddit",
          },
          {
        
            userId: 1,
            postId: 2,
            content:"porcodioilcomnment",
            commentId: 4,
            subId: "programming",
          },
          {
        
            userId: 1,
            postId: 1,
            content:"porcodioilcomnment",
            commentId: 5,
            subId: "games",
          },
    ],
  },
  action
) {
  switch (action.type) {
    case "comments/add": {
      return {
        ...state,
        myComment: [
          ...state.myComment,
          {
            userId: action.payload.userId,
            postId: action.payload.postId,
            commentId: action.payload.commentId,
            content: action.payload.content,
            subId: action.payload.subId,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
}
