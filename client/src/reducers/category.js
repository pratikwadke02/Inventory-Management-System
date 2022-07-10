import * as actionTypes from '../constants/actionTypes.js';

const categoryReducer = (state = {categories: null}, action) => {
    switch(action.type) {
        case actionTypes.ADD_CATEGORY:
            return {...state, categories: [...state.categories, action.category]};
        case actionTypes.GET_CATEGORIES:
            // console.log(action.payload);
            return {...state, categories: action.payload};
        case actionTypes.DELETE_CATEGORY:
            return {...state, categories: state.categories.filter(category => category.id !== action.payload.id)};
        default:
            return state;
    }
};

export default categoryReducer;

