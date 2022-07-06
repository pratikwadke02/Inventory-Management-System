import * as actionTypes from '../constants/actionTypes.js';

const categoryReducer = (state = {categories: []}, action) => {
    switch(action.type) {
        case actionTypes.ADD_CATEGORY:
            return {...state, categories: [...state.categories, action.category]};
        default:
            return state;
    }
};

export default categoryReducer;

