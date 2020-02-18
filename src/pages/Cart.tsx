import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../actions';
import {nonExistentProduct} from '../api';
import Product from '../components/Product';
import StatusLoading from '../components/StatusLoading';
import {IProduct, IState} from '../interfaces';

type CartProps = {
    cart: Array<IProduct>,
    status: string,
    removeFromCart: (id: string) => void
}

const Cart: React.FC<CartProps> = ({cart, status, removeFromCart}) => {
    if (status !== 'STATUS_SUCCESS') {
        return <StatusLoading status={status}/>
    }
    
    console.log(cart);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Cart Page</h1>
            <div>Total price: {totalPrice}</div>
            <div className='row products'>
                {cart.map(item => {
                    return (
                        <Product
                            className='col'
                            product={item}
                            showQuantity={true}
                            button={{text: 'Remove from cart', func: () => removeFromCart(item.id)}}
                            link={{text: 'More info', url: `/qualities/${item.id}`}}
                            key={item.id}
                        />
                    )
                })}
            </div>
        </div>
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

            return [...arr, nonExistentProduct(id)];
        }, []),
        status: state.status
    }
}

const mapDispatchToProps = {
    removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);