import { ADD_PRODUCT , GET_PRODUCTS} from "../constants/actionTypes";
import * as api from "../api/index";

export const addProduct = (productData, router) => async (dispatch) => {
    try {
        const { product } = await api.addProduct(productData);
        dispatch({ type: ADD_PRODUCT, product });
        router("/");
    } catch (error) {
        console.log(error);
    }
}

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.getProducts();
        dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (error) {
        console.log(error);
    }
}