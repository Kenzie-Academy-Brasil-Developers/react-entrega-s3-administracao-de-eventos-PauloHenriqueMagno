import { useContext } from "react"
import { CartContext } from "../providers/cart"
import { useParams } from "react-router-dom"
import ShowItems from "./ShowItems"
import { ErrorPage } from "./styled"

const Carts = () =>{
    const params = useParams()

    const {
        cartListGraduation,
        cartListWedding,
        cartListConfraternization,
        shoppingCart
    } = useContext(CartContext)

    return (
        <ul className="CartList">
            {
            params.type==="cart"?
            shoppingCart && shoppingCart.map(item => ShowItems(item, true)):
            params.type==="wedding"?
            cartListGraduation && cartListGraduation.map(item => ShowItems(item, true)):
            params.type==="graduation"?
            cartListWedding && cartListWedding.map(item => ShowItems(item, true)):
            params.type==="confraternization"?
            cartListConfraternization && cartListConfraternization.map(item => ShowItems(item, true)):
            <ErrorPage>Página não encontrada</ErrorPage>
            }
        </ul>
    )
}

export default Carts;