import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions';
import {IProduct} from '../interfaces';
import {IState} from '../interfaces';

type QualitiesProps = {
    products: Array<IProduct>,
    cartTotal: number,
    addToCart: (id: string) => void,
    match: {params?: any}
}

const Qualities: React.FC<QualitiesProps> = ({products, cartTotal, addToCart, match}) => {
    //console.log(match.params);
    //console.log(cart);

    return (
        <div className='products'>
            <div>{cartTotal}</div>
            {products.map(item => {
                return (
                    <div className='product' key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.text}</div>
                        <button onClick={() => addToCart(item.id)}>Add</button>
                    </div>
                )
            })}
        </div>
    );
}

const mapStateToProps = (state: IState) => {
    return {
        products: [...state.products],
        cartTotal: state.cart.length
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Qualities);