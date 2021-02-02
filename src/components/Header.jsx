import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

function Header() {
    const { cartCount, totalPrice, clearCart } = useShoppingCart();
    return (
        <div>
            <p>Total Items: {cartCount}</p>
            <p>Total Price: {totalPrice}</p>
            <button onClick={clearCart}>Clear</button>
        </div>
    )
}

export default Header
