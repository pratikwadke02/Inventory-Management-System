import {ADD_CATEGORY, GET_CATEGORIES, DELETE_CATEGORY} from '../constants/actionTypes';
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

export const getCategories = () => async (dispatch) => {
    try{
        const {data} = await api.getCategories();
        // console.log(data);
        dispatch({type: GET_CATEGORIES,
            payload: data
        });
    }catch(error){
        console.log(error);
    }
}

export const deleteCategory = (id, router) => async (dispatch) => {
    try{
        await api.deleteCategory(id);
        dispatch({type: DELETE_CATEGORY, payload: id});
        router('/add_category');
    }catch(error){
        console.log(error);
    }
}