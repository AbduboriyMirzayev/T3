import * as types from "./actionTypes";

const login = (data,token) => {
    return {
        type:types.SIGN_IN_SUCCESS,
        payload:data,
        token:token,
        logedin:true
    }
}

const logout = () => {
    return {
        type:types.LOG_OUT_SUCCESS,
        logedin:false
    }
}

export {login,logout};