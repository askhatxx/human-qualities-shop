import React from 'react';
import {NavLink} from 'react-router-dom';
import {IProduct} from '../interfaces';

type ProductProps = {
    className?: string,
    product: IProduct,
    showQuantity?: boolean,
    button?: {text: string, func: () => void},
    link?: {text: string, url: string}
}

const Product: React.FC<ProductProps> = ({className, product, showQuantity, button, link}) => {
    return (
        <div className={className && className}>
            <div className='product'>
                <div>{product.title}</div>
                <div>{product.image}</div>
                <div>{product.text}</div>
                <div>{product.price}</div>
                {showQuantity && <div>Quantity: {product.quantity}</div>}
                {button && (
                    <button onClick={button.func} disabled={product.quantity === 0}>
                        {button.text}
                    </button>
                )}
                {link && (
                    <div>
                        <NavLink to={link.url}>{link.text}</NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Product;