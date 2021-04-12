import * as types from "./actionTypes";

const initialState = {
  token: null,
  user: {},
  logined:false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        token: action.token,
        logined:true
      };
    default: {
      return state;
    }
  }
};

export default reducer;
