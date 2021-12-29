import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);

    const handleClick = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key);
    }
    return (
        <div>
            <div className='shop'>

                <div className='products'>
                    {
                        products.map(pd => <Product key={pd.key} handleClick={handleClick} products={pd}></Product>)
                    }
                </div>
                <div className='cart'>
                    <Cart cart={cart}>
                        <Link to='/order'>
                            <button className='btn-regular'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;