import React from 'react';

const ProductReview = (props) => {
    const { name, price, quantity, img, seller, key } = props.product;
    const { handleRemove } = props;
    return (
        <div>
            <div className='product'>
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <h2>{name}</h2>
                    <p>by: {seller}</p>
                    <p>quantity: {quantity}</p>
                    <h3> Price: <b>{price}$</b> </h3>
                    <button onClick={() => handleRemove(key)} className='btn-regular'>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;