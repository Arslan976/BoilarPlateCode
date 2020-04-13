import * as Actions from "../actions/index";

const initialState = {
  myData: "_____",
};

const useReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_NAME:
      return {
        ...state,
        myData: action.payload,
      };
    default: {
      return state;
    }
  }
};
export default useReducer;
