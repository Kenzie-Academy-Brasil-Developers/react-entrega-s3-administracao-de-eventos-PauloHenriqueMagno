import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartListGraduation, setCartListGraduation] = useState([])
    const [shoppingCart, setShoppingCart] = useState([])
    const [cartListWedding, setCartListWedding] = useState([])
    const [cartListConfraternization, setCartListConfraternization] = useState([])

    const addToCart = (product, setState = "") =>{
        if(setState==="graduation"){
            return setCartListGraduation([...cartListGraduation, product])
        }
        if(setState==="wedding"){
            return setCartListWedding([...cartListWedding, product])
        }
        if(setState==="confraternization"){
            return setCartListConfraternization([...cartListConfraternization, product])
        }
        if(!shoppingCart.some(item => item.id === product.id)){
            setShoppingCart([...shoppingCart, product])
        }
    }

    const removeFromCart = (product, setState = "") =>{
        if(setState==="graduation"){
            setCartListGraduation(cartListGraduation.filter(item => item.id!==product.id))
        }
        if(setState==="wedding"){
            setCartListWedding(cartListWedding.filter(item => item.id!==product.id))
        }
        if(setState==="confraternization"){
            setCartListConfraternization(cartListConfraternization.filter(item => item.id!==product.id))
        }

        setShoppingCart(shoppingCart.filter(item => item.id!==product.id))  
    }

    return (
        <CartContext.Provider 
            value={{
                cartListGraduation,
                cartListWedding,
                cartListConfraternization,
                shoppingCart,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}