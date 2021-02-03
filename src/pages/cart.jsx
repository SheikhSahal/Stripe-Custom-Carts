import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import Header from '../components/Header.jsx'

function Cart() {
    // const product = {}
    const { cartDetails , incrementItem , decrementItem } = useShoppingCart()
    // const data = cartDetails
    const productlist = Object.entries(cartDetails);
    console.log(productlist)
    return (
        <div>
            <Header />
            <div>
                {productlist.map(product => <div key={product[0].price_id}>
                    <p>Name: {product[1].name}</p>
                    <p>Price: ${product[1].price}</p>
                    <p><img src={product[1].image} /></p>
                    <button onClick={() => incrementItem(product[0])}>+</button>
                    <button onClick={() => decrementItem(product[0])}>-</button>
                </div>
                )}


            </div>
        </div>
    )
}

export default Cart
