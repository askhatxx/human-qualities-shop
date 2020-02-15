import React from 'react';
import {connect} from 'react-redux';
import {IProduct} from '../interfaces';
import {IState} from '../interfaces';

type CartProps = {
    cart: Array<IProduct>
}

const Cart: React.FC<CartProps> = ({cart}) => {
    console.log(cart);
    return (
        <h1>Cart Page {}</h1>
    );
}

const mapStateToProps = (state: IState) => {
    return {
        cart: state.cart.reduce((arr: Array<IProduct>, id: string) => {
            const indexInArr = arr.findIndex(item => item.id === id);
            
            if (indexInArr !== -1) {
                arr[indexInArr].quantity++;
                return [...arr];
            }

            const indexInProducts = state.products.findIndex(item => item.id === id);

            if (indexInProducts !== -1) {
                return [...arr, {...state.products[indexInProducts], quantity: 1}];
            }

            return [...arr, {id: id, title: 'Does not exist', text: '404', image: 'images/img404.jpg', quantity: 1}]
        }, [])
    }
}

export default connect(mapStateToProps)(Cart);