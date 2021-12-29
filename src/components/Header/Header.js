
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import img from '../../images/logo.png';
import useAuth from '../ContextApi/useAuth';

const Header = () => {
    const navigate = useNavigate();
    const { user, sigInOut, setUser } = useAuth();
    const handleSignOut = () => {
        sigInOut()
            .then(() => {
                navigate('/')
                setUser({});
            }).catch((error) => {

            })
    }
    return (
        <>
            <div className="App">
                <img src={img} width="300px" alt="" />
            </div>
            <div className='header-section'>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/order'>Order</NavLink>
                <NavLink to='/inventory'>Inventory</NavLink>
                {
                    user?.email ? <button onClick={handleSignOut}>LogOut</button> : <NavLink to='/login'>Login</NavLink>
                }

                <Link to='/'>{user?.displayName}</Link>
            </div>
        </>
    );
};

export default Header;