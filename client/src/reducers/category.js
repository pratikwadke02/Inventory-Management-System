import * as actionTypes from '../constants/actionTypes.js';

const categoryReducer = (state = {categories: null}, action) => {
    switch(action.type) {
        case actionTypes.ADD_CATEGORY:
            return {...state, categories: [...state.categories, action.category]};
        case actionTypes.GET_CATEGORIES:
            // console.log(action.payload);
            return {...state, categories: action.payload};
        default:
            return state;
    }
};

export default categoryReducer;

