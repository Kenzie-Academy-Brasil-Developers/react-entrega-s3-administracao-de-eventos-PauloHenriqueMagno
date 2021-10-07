import { useContext } from "react"
import { CartContext } from "../providers/cart"
import { useParams } from "react-router-dom"
import ShowItems from "./ShowItems"
import { ErrorPage, TitleSecond, ItemsList } from "./styled"

const Carts = () =>{
    const params = useParams()

    const {
        cartListGraduation,
        cartListWedding,
        cartListConfraternization,
        shoppingCart
    } = useContext(CartContext)



    return (
        <>
            {
                params.type &&
                <TitleSecond>{params.type.toUpperCase()}</TitleSecond>
            }
            <ItemsList>
                {
                params.type==="cart"?
                shoppingCart.map(item => ShowItems(item, true)):

                params.type==="graduation"?
                cartListGraduation.map(item => ShowItems(item, true)):

                params.type==="wedding"?
                cartListWedding.map(item => ShowItems(item, true)):

                params.type==="confraternization"?
                cartListConfraternization.map(item => ShowItems(item, true)):

                <ErrorPage>Página não encontrada</ErrorPage>
                }
            </ItemsList>
            
        </>
    )
}

export default Carts;