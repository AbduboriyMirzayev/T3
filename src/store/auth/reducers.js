import * as types from "./actionTypes";

const initialState = {
  token: null,
  user: {},
  logedin:false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        token: action.token,
        logedin:true
      };
    case types.LOG_OUT_SUCCESS:
      return {
        logedin:false
      };
    default: {
      return state;
    }
  }
};

export default reducer;
