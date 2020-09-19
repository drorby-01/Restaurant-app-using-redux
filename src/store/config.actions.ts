import { ACTIONS } from "./actions.config";

export function changeStarsColor(payload: string) {
  return {
    type: ACTIONS.CONFIG.CHANGE_STARS_COLOR,
    payload,
  };
}

export function changeImageSize(payload: number) {
  return {
    type: ACTIONS.CONFIG.CHANGE_IMAGE_SIZE,
    payload,
  };
}
