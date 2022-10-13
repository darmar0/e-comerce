import {
  ShoppingCartIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const { cartQuantity } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <ItemCount>
        {cartItems.length
          ? cartItems.map((item) => item.quantity).reduce((a, b) => a + b)
          : 0}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
