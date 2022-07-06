import * as actionTypes from '../constants/actionTypes.js';

const productReducer = (state = {products: null}, action) => {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            return {...state, products: [...state.products, action.product]};
        case actionTypes.GET_PRODUCTS:
            return {...state, products: action.payload};
        default:
            return state;
    }
}

export default productReducer;