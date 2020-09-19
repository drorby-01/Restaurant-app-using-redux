import { ACTIONS } from "./actions.config";

export const initMealsState = {
  meals: [],
  orders: [],
  users: [],
  lastOrderTime: "220-07-01",
  anotherConfigurationOption: { startsColor: "red" },
};

interface IProps {
  type: string; // what am i doing
  payload: any; // what am i sending
}

export default function mealsReducer(
  state: any = initMealsState,
  action: IProps
) {
  switch (action.type) {
    case ACTIONS.ADD_MEAL: {
      const { payload } = action;
      console.log(`A new order is being get ${payload.name}`)
      return { ...state, orders: [...state.orders, payload] };
    }
    case ACTIONS.GET_MEALS_FROM_SERVER_DONE: {
      const { payload } = action;
      return { ...state, meals: payload };
    }
    case ACTIONS.REMOVE_MEAL: {
      const { payload } = action;
      // find index blabla // delete
      console.log(payload)
      return { ...state, orders: payload };
    }
    case ACTIONS.REMOVE_All_MEAL:{
      return {...state,orders:[]}
    }
    default: {
      console.log("i am here! this is not your reducer!!");
      return state;
    }
  }
}
