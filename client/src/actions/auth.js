import {AUTH, GET_PROFILE} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signIn = (userData, router) => async(dispatch) => {
    console.log("hello");
    try{
        const data = await api.signIn(userData);
        // console.log("Test");
        dispatch({type: AUTH, data});
        // console.log("hello2");
        router('/');
    }catch(error){
        console.log(error);
    }
};

export const SignUp = (userData, router) => async(dispatch) => {
    try{
        const {data} = await api.signUp(userData);
        dispatch({type: AUTH, data});
        router('/');
    }catch(error){
        console.log(error);
    }
}

export const getProfile = (userId) => async (dispatch) => {
    try{
        const data = await api.getProfile(userId);
        dispatch({type: GET_PROFILE, data});
    }catch(error){
        console.log(error);
    }
}