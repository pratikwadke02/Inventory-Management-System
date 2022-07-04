import {AUTH} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signIn = (userData, router) => async(dispatch) => {
    console.log("hello");
    try{
        const data = await api.signIn(userData);
        // console.log("Test");
        dispatch({type: AUTH, data});
        // console.log("hello2");
        router('/');
        // window.location='/';
    }catch(error){
        console.log(error);
    }
};

export const SignUp = (data, router) => async(dispatch) => {
    try{
        const {data} = await api.signUp(data);
        dispatch({type: AUTH, data});
        router('/');
    }catch(error){
        console.log(error);
    }
}