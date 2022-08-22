import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(item=> item.id === productToAdd.id);
    if(existingCartItem) {
        return cartItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item)
        
    }
         return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToRemove) => { 
    const existingCartItem = cartItems.find(item=> item.id === productToRemove.id); //FIND THE PRODUCT TO REMOVE
    if(existingCartItem.quantity === 1) {  // IF QUANTITY IS 1, REMOVE PRODUCT FROM CART
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
       
    } else{ // IF QUANTITY IS BIGGER THAN 1, REDUCE QUANTITY
        return cartItems.map(item => item.id === productToRemove.id ? {...item, quantity: item.quantity - 1} : item)
    }
}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=> {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
})

export const CartProvider = ({children})=> {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (productToRemove) => { // CHANGING QUANTITY
        setCartItems(removeCartItem(cartItems, productToRemove))
      }

    const clearItemFromCart = (productToClear) => {  // DELETING FROM CARTLIST
        setCartItems(clearCartItem(cartItems, productToClear))
    }


    const value = {isCartOpen, 
        setIsCartOpen,
        addItemToCart , 
        removeItemFromCart,
        clearItemFromCart, 
        cartItems,
        };
    return(
     <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}