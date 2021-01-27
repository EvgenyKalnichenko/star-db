import React from 'react'
import './shopping-cart-table.css'
import {connect} from "react-redux";

const ShoppingCartTable = ({item, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return(
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => onIncrease(id)}
                        className='btn btn-outline-success'>
                        <i className='fa fa-plus-circle'></i>
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className='btn  btn-outline-warning'>
                        <i className='fa fa-minus-circle'></i>
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className='btn btn-outline-danger'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        )
    };

    return(
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th>№</th>
                    <th>item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {item.map(renderRow)}
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
};

const mapStateToProps = ({cartItems, orderTotal}) => {
    return{
        item: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = () => {
    return{
        onIncrease: (id) => {
            console.log('Increase ' + id);
        },
        onDecrease: (id) => {
            console.log('Decrease ' + id);
        },
        onDelete: (id) => {
            console.log('Delete ' +id);
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable);