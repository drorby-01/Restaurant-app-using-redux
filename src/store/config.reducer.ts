import { ACTIONS } from "./actions.config";

export const initConfigState = {
  starsColor: "red",
  imageSize: 200,
};

interface IProps {
  type: string; // what am i doing
  payload: any; // what am i sending
}

export default function configReducer(
  state: any = initConfigState,
  action: IProps
) {
  switch (action.type) {
    case ACTIONS.CONFIG.CHANGE_STARS_COLOR: {
      const { payload: color } = action;
      return { ...state, starsColor: color };
    }
    case ACTIONS.CONFIG.CHANGE_IMAGE_SIZE: {
      const { payload: size } = action;
      return { ...state, imageSize: size * 3 };
    }
    default: {
      return state;
    }
  }
}
