import { useState, createContext, useEffect } from "react"
import axios from "axios"

export const ShoppingContext = createContext()

export const ShoppingProvider = ({children}) => {
    const [shoppingList, setShoppingList] = useState([])
    
    useEffect(()=>{
        axios.get("https://api.punkapi.com/v2/beers")
            .then(response => setShoppingList(response.data))
    }, [])
        
    return (
        <ShoppingContext.Provider value={{ shoppingList }}>
            {children}
        </ShoppingContext.Provider>
    )
}