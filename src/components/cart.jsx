import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import Header from './Header.js'

function cart() {
    const product = {}
    const { cartDetails , incrementItem , decrementItem } = useShoppingCart()
    const data = cartDetails
    const productlist = Object.entries(cartDetails);

    return (
        <div>
            <Header />
            <div>
                {productlist.map(product => <div key={product.price_id}>
                    <p>Name: {product.name}</p>
                    <p>Name: ${product.price}</p>
                    <p><img src={product.image} /></p>
                    <button onClick={incrementItem}>+</button>
                    <button onClick={decrementItem}>-</button>
                </div>
                )}


            </div>
        </div>
    )
}

export default cart
