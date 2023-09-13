import {
  CLOSE_MODAL,
  OPEN_MODAL,
  MODAL_STATUS,
} from "../constants/modal.const";

const initialState = {
  isOpen: false,
  content: null,
  type: "button",
};
export const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        content: payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    case MODAL_STATUS:
      return {
        ...state,
        type: payload,
      };
    default:
      return state;
  }
};
