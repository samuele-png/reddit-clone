export default function reducer(
  state = {
    myPost: [
      {
        userId: 1,
        postId: 1,
        content: "first comment",
        subId: "askreddit",
      },
      {
        userId: 2,
        postId: 2,
        content: "2nd comment",
        subId: "games",
      },
      {
        userId: 3,
        postId: 3,
        content: "3rd comment",
        subId: "programming",
      },
      {
        userId: 4,
        postId: 4,
        content: "4th comment",
        subId: "react",
      },
    ],
  },
  action
) {
  switch (action.type) {
    case "posts/add": {
      return {
        ...state,
        myPost: [
          ...state.myPost,
          {
            userId: action.payload.userId,
            postId: action.payload.postId,
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
