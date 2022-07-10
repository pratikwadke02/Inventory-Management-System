import * as actionTypes from '../constants/actionTypes.js';

const productReducer = (state = {products: null}, action) => {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            return {...state, products: [...state.products, action.product]};
        case actionTypes.GET_PRODUCTS:
            return {...state, products: action.payload};
        case actionTypes.DELETE_PRODUCT:
            return {...state, products: state.products.filter(product => product.id !== action.payload.id)};
        case actionTypes.UPDATE_PRODUCT:
            return {...state, products: state.products.map(product => product.id === action.payload.id ? action.payload : product)};
        default:
            return state;
    }
}

export default productReducer;