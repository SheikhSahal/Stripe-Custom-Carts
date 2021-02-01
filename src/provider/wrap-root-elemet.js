import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';

const stripePromise = loadStripe("pk_test_51ICPbvIoW5V7ZqlfNTRdR1YAhQjycy4hOCyWI3rpiUbsmXB3p1qpFkNX4yhTE6C5t3UsLup2XSYNYBI1mrQAE9Td00GvRbVDNE")

export const WrapElement =({ element }) => {
    return (
        <CartProvider
            stripe={stripePromise}
            successUrl="stripe.com"
            cancelUrl="twitter.com/dayhaysoos"
            currency="USD"
        >   
            {element}
        </CartProvider>
    )
}