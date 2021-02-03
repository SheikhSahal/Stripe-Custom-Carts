import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';

const stripePromise = loadStripe("pk_test_51ICPbvIoW5V7ZqlfNTRdR1YAhQjycy4hOCyWI3rpiUbsmXB3p1qpFkNX4yhTE6C5t3UsLup2XSYNYBI1mrQAE9Td00GvRbVDNE")

export const wrapRootElement =({ element }) => {
    return (
        <CartProvider
            mode = "client-only"
            stripe={stripePromise}
            successUrl="http://localhost:8888/success"
            cancelUrl="http://localhost:8888/error"
            currency="USD"
        >   
            {element}
        </CartProvider>
    )
}