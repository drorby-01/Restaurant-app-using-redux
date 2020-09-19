import { ACTIONS } from "./actions.config";

export function addComment(payload:any){

    return {
        type:ACTIONS.COMMENT.ADD_COMMENT,
        payload
    }

}