import { Header, HeaderNav, Container, Button } from "../styled"
import { useHistory } from "react-router-dom"
import { Badge } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import MenuButton from "../MenuButton"
import { CartContext } from "../../providers/cart"
import { useContext } from "react"

const HeaderMain = () =>{
    const history = useHistory()

    const { shoppingCart } = useContext(CartContext)

    return (
        <Header>
            <Container className="container">
                <h1>KenzieEvents</h1>
                <HeaderNav>
                    <Button onClick={()=> history.push("/")}>Home</Button>
                    <MenuButton />
                    <Badge badgeContent={!!shoppingCart? shoppingCart.length : 0} color="primary">
                        <Button onClick={()=> history.push("/cart")}>
                            <ShoppingCart />
                        </Button>
                    </Badge>
                </HeaderNav>
            </Container>
        </Header>
    )
}

export default HeaderMain;