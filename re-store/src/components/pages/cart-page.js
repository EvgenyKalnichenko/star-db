import React from "react";
import ShoppingCartTable from '../shopping-cart-table/'
import {Link} from "react-router-dom";

const CartPage = () => {
    return(
        <div>
            <ShoppingCartTable/>
            <Link to="/order" className='btn btn-info add-to-cart'>
                Оформить заказ
            </Link>
        </div>

    )
};

export default CartPage;
