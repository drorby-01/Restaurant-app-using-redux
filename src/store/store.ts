import { createStore, combineReducers, compose } from "redux";
import mealsReducer from "./meals.reducer";
import configReducer from "./config.reducer";

// using devtools redux
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({ mealsReducer, configReducer }),
  composeEnhancers()
);
