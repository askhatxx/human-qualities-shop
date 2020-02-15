import {fetchProductsApi} from '../api';

export const addToCart = (id: string) => {
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
}

export const fetchProducts = (dispatch: any) => {
    return () => {
        fetchProductsApi()
            .then(result => {
                dispatch({
                    type: 'FETCH_PRODUCTS',
                    payload: result
                })
            })
    }
}