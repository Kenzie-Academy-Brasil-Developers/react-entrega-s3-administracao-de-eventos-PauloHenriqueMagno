import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState([])
    const [cartListGraduation, setCartListGraduation] = useState([])
    const [cartListWedding, setCartListWedding] = useState([])
    const [cartListConfraternization, setCartListConfraternization] = useState([])

    const addEvent = (setCart, cart, product, event) =>{
        const newArray = product.filter(item => cart.some(prod => prod===item))
        const remainArray = product.filter(item => !cart.some(prod => prod===item))
        
        localStorage.setItem(`@KenzieEvents:${event}`, JSON.stringify(cart.concat(remainArray)))
        
        setCart(cart.concat(remainArray))
        
        console.log(cart.concat(remainArray))

        if(newArray.length>0&&newArray.length===product.length){
            toast.info("Event already has this item(s)")
        }
        if(newArray.length>0&&newArray.length!==product.length){
            toast.info("Event already has some item(s)")
        }
        if(newArray.length===0){
            toast.success("Successfully added")
        }

        return newArray
    }
    
    const addToCart = (product, event = "cart") =>{
        if(event==="graduation"){
            return addEvent(setCartListGraduation, cartListGraduation, product, event)
        }
        if(event==="wedding"){
            return addEvent(setCartListWedding, cartListWedding, product, event)
        }
        if(event==="confraternization"){
            return addEvent(setCartListConfraternization, cartListConfraternization, product, event);
        }
        if(event==="noAlert"){
            setShoppingCart(product);
            localStorage.setItem(`@KenzieEvents:cart`, JSON.stringify(product))
            return
        }
        if(event==="cart" && !shoppingCart.some(item => item===product)){
            toast.success("Successfully added")

            localStorage.setItem(`@KenzieEvents:cart`, JSON.stringify([...shoppingCart, product]))
            setShoppingCart([...shoppingCart, product])
            return
        }
        if(event==="cart" && shoppingCart.some(item => item===product)){
            toast.error("Already has this item")
            return
        }

        toast.error("Failed to add")
    }

    const removeFromCart = (product, event) =>{
        if(event==="graduation"){
            toast.success("Successfully removed")
            const filter = cartListGraduation.filter(item => item!==product)

            setCartListGraduation(filter)
            return localStorage.setItem(`@KenzieEvents:${event}`, JSON.stringify(filter))
        }
        if(event==="wedding"){
            toast.success("Successfully removed")
            const filter = cartListWedding.filter(item => item!==product)

            setCartListWedding(filter)
            return localStorage.setItem(`@KenzieEvents:${event}`, JSON.stringify(filter))
        }
        if(event==="confraternization"){
            toast.success("Successfully removed")
            const filter = cartListConfraternization.filter(item => item!==product)

            setCartListConfraternization(filter)
            return localStorage.setItem(`@KenzieEvents:${event}`, JSON.stringify(filter))
        }
        if(event==="clear"){
            setShoppingCart([])
            localStorage.setItem(`@KenzieEvents:cart`, JSON.stringify([]))
            return
        }
        if(event==="cart"){
            toast.success("Successfully removed")
            const filter = shoppingCart.filter(item => item!==product)
            
            setShoppingCart(filter)  
            localStorage.setItem(`@KenzieEvents:cart`, JSON.stringify(filter))
            return
        }

        toast.error("Failed to remove")
    }

    useEffect(()=>{
        if(!!localStorage.getItem("@KenzieEvents:cart")){
            const cart = JSON.parse(localStorage.getItem("@KenzieEvents:cart"));
            setShoppingCart(cart)
        }
        if(!!localStorage.getItem("@KenzieEvents:graduation")){
            const graduation = JSON.parse(localStorage.getItem("@KenzieEvents:graduation"))
            setCartListGraduation(graduation)
        }
        if(!!localStorage.getItem("@KenzieEvents:wedding")){
            const wedding = JSON.parse(localStorage.getItem("@KenzieEvents:wedding"))
            setCartListWedding(wedding)
        }
        if(!!localStorage.getItem("@KenzieEvents:confraternization")){
            const confraternization = JSON.parse(localStorage.getItem("@KenzieEvents:confraternization"))
            setCartListConfraternization(confraternization)
        }
    }, [])

    return (
        <CartContext.Provider 
            value={{
                cartListGraduation,
                cartListWedding,
                cartListConfraternization,
                shoppingCart,
                addToCart,
                removeFromCart,
                setShoppingCart,
                setCartListGraduation,
                setCartListWedding,
                setCartListConfraternization
            }}
        >
            {children}
        </CartContext.Provider>
    )
}