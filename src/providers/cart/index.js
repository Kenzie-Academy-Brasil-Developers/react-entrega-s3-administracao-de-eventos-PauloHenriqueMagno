import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) =>{
        setCartList([...cartList, product])
    }

    const removeFromCart = (product) =>{
        const filter = cartList.filter(item => item.id !== product.id)
        setCartList(filter)
    }

    return (
        <CartContext value={{cartList, addToCart, removeFromCart}}>
            {children}
        </CartContext>
    )
}