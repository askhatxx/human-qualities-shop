import {fetchProductsApi} from '../api';

export const addToCart = (id: string) => {
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
}

export const removeFromCart = (id: string) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

export const fetchProducts = (dispatch: any) => {
    return () => {
        dispatch({type: 'STATUS_LOADING'});
        
        fetchProductsApi()
            .then(result => {
                dispatch({type: 'FETCH_PRODUCTS', payload: result});
                dispatch({type: 'STATUS_SUCCESS'});
            })
            .catch(() => {
                dispatch({type: 'STATUS_ERROR'});
            })
    }
}