import {combineReducers} from 'redux';
import {IAction} from '../interfaces';

const products = (state = [], action: IAction) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return [...state, ...action.payload]
        default:
            return state;
    }
}

const cart = (state = [], action: IAction) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item !== action.payload);
        default:
            return state;
    }
}

export default combineReducers({
    products,
    cart
});