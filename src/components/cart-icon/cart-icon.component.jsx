import {useContext} from "react";
import { ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg';
import {CartContext } from "../../contexts/cart.context";
import './cart-icon.styles.scss'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const toggleCartHandler = () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container' onClick={toggleCartHandler}>
            <ShoppingCart className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon