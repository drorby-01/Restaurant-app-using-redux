import { ACTIONS } from "./actions.config";
import { IMeal } from "components/ui-components/meal";

export function addMealAction(payload: IMeal) {
  return {
    type: ACTIONS.ADD_MEAL,
    payload,
  };
}

export function getMealsFromServerDone(payload: Array<any>) {
  return {
    type: ACTIONS.GET_MEALS_FROM_SERVER_DONE,
    payload,
  }
}


  export function removeMealAction(payload:Array<any>){
    return {
      type: ACTIONS.REMOVE_MEAL,
      payload
    }
  }

  export function removeAllMealsAction(){
    return {
      type: ACTIONS.REMOVE_All_MEAL,
      payload:[]
    }
  }

