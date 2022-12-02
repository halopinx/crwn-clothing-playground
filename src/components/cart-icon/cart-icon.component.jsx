import {useContext} from "react";
import {CartContext } from "../../contexts/cart.context";
import {CartIconContainer, ShoppingCart, ItemCount} from  './cart-icon.styles'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    const toggleCartHandler = () => setIsCartOpen(!isCartOpen)
    return (
        <CartIconContainer onClick={toggleCartHandler}>
            <ShoppingCart />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon