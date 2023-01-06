import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';


const Checkout = () => {

    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div>
            <h1>I am the checkout page</h1>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const { id, name, quantity } = cartItem;

                        return (
                            <div key={id}>
                                <h2>{name}</h2>
                                <span>{quantity}</span>
                                <br />
                                <span onClick={() => addItemToCart(cartItem)}>increment</span>
                                <br />
                                <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                            </div>
                        )
                        // <CheckoutItem />
                    })
                }
            </div>
            
        </div>
    )
}

export default Checkout;