import { ACTIONS } from "./actions.config";

export const initConfigState = {
    comments:[] ,
  };
  
  interface IProps {
    type: string; 
    payload: any; 
  }
  
  export default function commentsReducer(
    state: any = initConfigState,
    action: IProps
  ) {
    switch (action.type) {
      
      case ACTIONS.COMMENT.ADD_COMMENT:{
          console.log("a new comment had")
          const {payload} = action
          return {comments:[...state.comments,payload]}
      }
      default: {
        return state;
      }
    }
  }
  