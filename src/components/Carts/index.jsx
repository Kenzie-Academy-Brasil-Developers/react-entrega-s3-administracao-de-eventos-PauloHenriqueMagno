import { useContext } from "react"
import { CartContext } from "../../providers/cart"
import { useParams } from "react-router-dom"
import ShowItems from "../ShowItems"
import { ErrorPage, TitleSecond, ItemsList } from "../styled"

const Carts = () =>{
    const params = useParams()

    const {
        cartListGraduation,
        cartListWedding,
        cartListConfraternization,
        shoppingCart
    } = useContext(CartContext)

    const cartList = (cart) => {

        if(cart.length===0){
            return <ErrorPage>Empty</ErrorPage>
        }
        return (
            cart.map(item => ShowItems(item, true))
        )
    }

    return (
        <>
            {
                params.type &&
                <TitleSecond>{params.type.toUpperCase()}</TitleSecond>
            }
            <ItemsList>
                {
                params.type==="cart"?
                cartList(shoppingCart):

                params.type==="graduation"?
                cartList(cartListGraduation):

                params.type==="wedding"?
                cartList(cartListWedding):

                params.type==="confraternization"?
                cartList(cartListConfraternization):

                <ErrorPage>Página não encontrada</ErrorPage>
                }
            </ItemsList>
            
        </>
    )
}

export default Carts;