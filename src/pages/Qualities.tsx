import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions';
import Product from '../components/Product';
import StatusLoading from '../components/StatusLoading';
import {IProduct, IState} from '../interfaces';

type QualitiesProps = {
    products: Array<IProduct>,
    cartTotal: number,
    status: string,
    addToCart: (id: string) => void
}

const Qualities: React.FC<QualitiesProps> = ({products, cartTotal, status, addToCart}) => {
    if (status !== 'STATUS_SUCCESS') {
        return <StatusLoading status={status}/>
    }
    
    return (
        <div className='qualities'>
            <div>{cartTotal}</div>
            <div className='products'>
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

export default connect(mapStateToProps, mapDispatchToProps)(Qualities);