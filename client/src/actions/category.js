import {ADD_CATEGORY} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const addCategory = (categoryData, router) => async (dispatch) => {
    try{
        const {category} = await api.addCategory(categoryData);
        dispatch({type: ADD_CATEGORY, category});
        router('/');
    }catch(error){
        console.log(error);
    }
}