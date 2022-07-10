import * as actionTypes from '../constants/actionTypes.js';

const productReducer = (state = {products: null}, action) => {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            return {...state, products: [...state.products, action.product]};
        case actionTypes.GET_PRODUCTS:
            return {...state, products: action.payload};
        case actionTypes.DELETE_PRODUCT:
            console.log(action.payload.id);
            return {...state, products: state.products.filter(product => product.id !== action.payload.id)};
        default:
            return state;
    }
}

export default productReducer;