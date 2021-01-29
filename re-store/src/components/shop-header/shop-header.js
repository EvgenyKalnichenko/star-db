import React from 'react';
import {Link} from "react-router-dom";
import './shop-header.css';
import {connect} from "react-redux";

const ShopHeader = ({total, cartCurrentProducts}) => {
    console.log(total, cartCurrentProducts);
    return(
        <header className='shop-header row'>
            <Link to="/" className='logo text-dark'>ReStore</Link>
            <Link to="/cart" className='shopping-cart'>
                <i className='cart-icon fa fa-shopping-cart'></i>
                {cartCurrentProducts} items ($ {total})
            </Link>
        </header>
    )
};

const mapStateToProps = ({shoppingCart: {orderTotal, cartCurrentProducts} }) => {
    return{
        total: orderTotal,
        cartCurrentProducts: cartCurrentProducts
    }
};

export default connect(mapStateToProps)(ShopHeader);
