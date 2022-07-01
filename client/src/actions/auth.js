import {AUTH} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signIn = (data, router) => async(dispatch) => {
    try{
        const {data} = await api.signIn(data);
        dispatch({type: AUTH, data});
        router('/');
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