import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'

const CartIcon = () => {const {isCartOpen, setIsCartOpen} = useContext(CartContext);

const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleCartOpen}>
            <ShoppingCartIcon className='shopping-icon'/>
            <span className='item-count'>10</span>
        </div>
    )
}

export default CartIcon;