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
        <div className={!!className ? className : ''}>
            <div className='product'>
                <div className='product-image'>
                    {link ? 
                        <NavLink to={link.url}><img src={product.image} alt={product.title}/></NavLink>
                        : <img src={product.image} alt={product.title}/>
                    }
                </div>
                <div className='product-options'>
                    <div className='product-title'>{product.title}</div>
                    <div className='product-text'>{product.text}</div>
                    <div className='product-price'>Price: {product.price}</div>
                    {showQuantity && <div className='product-quantity'>Quantity: {product.quantity}</div>}
                    {link && (
                        <NavLink 
                            className='product-link btn' 
                            to={link.url}
                        >
                            {link.text}
                        </NavLink>
                    )}
                    {button && (
                        <button 
                            className='product-button btn' 
                            onClick={button.func} disabled={product.quantity === 0}
                        >
                            {product.quantity === 0 ? 'Sold Out' : button.text}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;