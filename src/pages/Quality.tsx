import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions';
import NotExist from '../components/NotExist';
import Product from '../components/Product';
import StatusLoading from '../components/StatusLoading';
import {IProduct, IState} from '../interfaces';

type QualityProps = {
    products: Array<IProduct>,
    cartTotal: number,
    status: string,
    addToCart: (id: string) => void,
    match: {params: {id: string}}
}

const Quality: React.FC<QualityProps> = ({products, cartTotal, status, addToCart, match}) => {
    if (status !== 'STATUS_SUCCESS') {
        return <StatusLoading status={status}/>
    }
    
    const item = products.find(item => item.id === match.params.id);

    if (!item) {
        return <NotExist/>
    }

    return (
        <div className='quality'>
            <div className='page-title'>
                <h2>Quality description</h2>
                <div>{cartTotal !== 0 ? `Cart: ${cartTotal}` : 'Cart is empty'}</div>
            </div>
            <Product
                product={item}
                showQuantity={false}
                button={{text: 'Add to cart', func: () => addToCart(item.id)}}
            />
        </div>
    );
}

const mapStateToProps = (state: IState) => {
    return {
        products: [...state.products],
        cartTotal: state.cart.length,
        status: state.status
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Quality);