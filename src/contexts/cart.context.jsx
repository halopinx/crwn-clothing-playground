import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if (existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }
   return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, removeCartItem) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === removeCartItem.id)

    if (existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== removeCartItem.id)
    }

    return cartItems.map((cartItem) => cartItem.id === removeCartItem.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => false,
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const addItemToCart = (productToAdd) => setCartItems(addCartItem(cartItems,productToAdd))
    const removeItemToCart = (cartItemToRemove) => setCartItems(removeCartItem(cartItems,cartItemToRemove))
    const clearItemFromCart = (cartItemToClear) => setCartItems(clearCartItem(cartItems, cartItemToClear))

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount)
    }, [cartItems])

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemToCart, clearItemFromCart, cartCount}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}