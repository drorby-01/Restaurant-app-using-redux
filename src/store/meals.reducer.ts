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
      return { ...state, orders: [...state.orders, payload] };
    }
    case ACTIONS.GET_MEALS_FROM_SERVER_DONE: {
      const { payload } = action;
      return { ...state, meals: payload };
    }
    case "REMOVE_MEAL": {
      const { payload } = action;
      // find index blabla // delete
      const newOrders = [...state.orders];
      return { ...state, orders: [...newOrders] };
    }
    default: {
      console.log("i am here! this is not your reducer!!");
      return state;
    }
  }
}
