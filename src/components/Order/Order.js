import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ProductReview from '../ProductReview/ProductReview';
import { useHistory, useNavigate } from "react-router-dom";

const Order = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemove = (key) => {
        const newCart = cart.filter(cart => cart.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }
    const handlePlaceOrder = () => {
        navigate('/placeOrder');
        setCart([]);
        clearTheCart();
    }
    return (
        <div>
            <div className='shop'>
                <div className="products">
                    {
                        cart.map(pd => <ProductReview key={pd.key} handleRemove={handleRemove} product={pd}></ProductReview>)
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;