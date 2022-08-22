import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.componwnt";

const Checkout = () => {

const {cartItems} = useContext(CartContext)
const total = cartItems.length > 0? cartItems.map(item=> item.price * item.quantity).reduce((a,b)=> a + b) : null;

    return(
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
          <span>Product</span>
          </div>
          <div className="header-block">
          <span>Description</span>
          </div>
          <div className="header-block">
          <span>Quantuty</span>
          </div>
          <div className="header-block">
          <span>Price</span>
          </div>
          <div className="header-block">
          <span>Remove</span>
          </div>
        </div>
        {cartItems.map((item)=> 
           <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
      )}
        <span className="total">Total = {total}</span>
      </div>
    )
}

export default Checkout;