import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'


function Card({ product }) {
    const { addItem } = useShoppingCart()
    return (
        <div>
            <p>Name : {product.name}</p>
            <p>Price : ${product.price}</p>
            <img src={product.image} width="200" height="100" />
            <br />
            <button onClick={() => addItem(product)}>Add to Cart</button>
        </div>
    )
}

export default Card
