import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions';
import Product from '../components/Product';
import {IProduct, IState} from '../interfaces';

type QualitiesProps = {
    products: Array<IProduct>,
    cartTotal: number,
    addToCart: (id: string) => void
}

const Qualities: React.FC<QualitiesProps> = ({products, cartTotal, addToCart}) => {
    return (
        <div className='products'>
            <div>{cartTotal}</div>
            {products.map(item => {
                return (
                    <Product
                        product={item}
                        showQuantity={false}
                        button={{text: 'Add to cart', func: () => addToCart(item.id)}}
                        link={{text: 'More info', url: `/qualities/${item.id}`}}
                        key={item.id}
                    />
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