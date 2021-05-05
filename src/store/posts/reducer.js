
const myPost = []
      
  
export default function reducer(state = myPost, action) {
    switch (action.type) {
      case "posts/add": {
        return {
            
          ...state,
          myPost: [
            ...state,
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
  