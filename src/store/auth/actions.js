import * as types from "./actionTypes";

const login = (data,token) => {
    return {
        type:types.SIGN_IN_SUCCESS,
        payload:data,
        token:token,
        logined:true
    }
}

export {login};
