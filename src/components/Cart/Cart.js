import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const totalQuantity = cart.reduce((previous, current) => previous + current?.quantity, 0);
    const total = cart.reduce((previous, current) => previous + current.price * current?.quantity, 0);
    const shipping = total > 15 ? 15 : 0;
    const tax = (total + shipping) * 0.1;
    return (
        <div className='carts'>
            <h3 className='App'>Order summary</h3>
            <h3 className='App'>Total items:{totalQuantity} </h3>
            <p>Total:{total.toFixed(2)}</p>
            <p>shipping:{shipping.toFixed(2)}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grand Total:{(total + shipping + tax).toFixed(2)}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;