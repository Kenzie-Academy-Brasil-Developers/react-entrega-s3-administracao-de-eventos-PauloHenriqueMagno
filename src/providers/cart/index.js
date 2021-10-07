import { createContext, useState } from "react";
import { toast } from "react-toastify"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState([])
    const [cartListGraduation, setCartListGraduation] = useState([])
    const [cartListWedding, setCartListWedding] = useState([])
    const [cartListConfraternization, setCartListConfraternization] = useState([])

    const addEvent = (setCart, cart, product) =>{
        const newArray = product.filter(item => cart.some(prod => prod===item))
        const remainArray = product.filter(item => !cart.some(prod => prod===item))

        setCart(cart.concat(remainArray))

        if(newArray.length!==0){
            toast.info("Event already has this item(s)")
        }
        if(newArray.length===0){
            toast.success("Successfully added")
        }
        return newArray
    }

    const addToCart = (product, event) =>{
        if(event==="graduation"){
            return addEvent(setCartListGraduation, cartListGraduation, product)
        }
        if(event==="wedding"){
            return addEvent(setCartListWedding, cartListWedding, product)
        }
        if(event==="confraternization"){
            return addEvent(setCartListConfraternization, cartListConfraternization, product);
        }
        if(event==="noAlert"){
            setShoppingCart(product);
            return
        }
        if(!shoppingCart.some(item => item.id === product.id)){
            toast.success("Successfully added")
            setShoppingCart([...shoppingCart, product])
            return
        }
        if(shoppingCart.some(item => item.id === product.id)){
            toast.error("Already has this item")
            return
        }

        toast.error("Failed to add")
    }

    const removeFromCart = (product, event) =>{
        if(event==="graduation"){
            toast.success("Successfully removed")
            setCartListGraduation(cartListGraduation.filter(item => item!==product))
            return
        }
        if(event==="wedding"){
            toast.success("Successfully removed")
            setCartListWedding(cartListWedding.filter(item => item!==product))
            return
        }
        if(event==="confraternization"){
            toast.success("Successfully removed")
            setCartListConfraternization(cartListConfraternization.filter(item => item!==product))
            return
        }
        if(event==="clear"){
            setShoppingCart([])
            return
        }
        if(event==="cart"){
            toast.success("Successfully removed")
            setShoppingCart(shoppingCart.filter(item => item!==product))  
            return
        }

        toast.error("Failed to remove")
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