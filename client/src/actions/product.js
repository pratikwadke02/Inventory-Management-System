import { ADD_PRODUCT , GET_PRODUCTS, DELETE_PRODUCT} from "../constants/actionTypes";
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

export const deleteProduct = (id, router) => async (dispatch) => {
    try{
        console.log(id);
        await api.deleteProduct(id);
        dispatch({ type: DELETE_PRODUCT, payload: id });
        router("/add_product");
    }catch(error){
        console.log(error)
    }
}

export const updateProduct = (productData, router) => async (dispatch) => {
    try {
        const { product } = await api.updateProduct(productData);
        dispatch({ type: ADD_PRODUCT, product });
        router("/");
    } catch (error) {
        console.log(error);
    }
}