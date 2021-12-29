import React from 'react';

const Product = (props) => {
    const { name, key, img, price, stock, seller } = props.products;
    const { handleClick } = props;
    return (
        <div>
            <div className='product'>
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <h2>{name}</h2>
                    <p>by: {seller}</p>
                    <p>Stock: {stock}</p>
                    <h3> Price: <b>{price}$</b> </h3>
                    <button onClick={() => handleClick(props.products)} className='btn-regular'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;