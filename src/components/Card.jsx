import React from 'react'

function Card({ product }) {
    return (
        <div>
            <p>Name : {product.name}</p>
            <p>Price : ${product.price}</p>
            <img src={product.image} width="200" height="100" />
            <br />
            <button>Add to Cart</button>
        </div>
    )
}

export default Card
