import React from 'react';
import './Cart.css';

const Cart = ({ product }) => {
    const { name, price } = product;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
};

export default Cart;