import { Switch, Route } from "react-router-dom"
import Carts from "../components/Carts"
import HeaderMain from "../components/HeaderMain"
import ShoppingList from "../components/ShoppingList"
import { Container } from "../components/styled"

const Routes = () =>{
    return (
        <>
            <HeaderMain />
            <Container>
                <Switch>
                    <Route path="/:type">
                        <Carts />
                    </Route>
                    <Route path="/">
                        <ShoppingList />
                    </Route>
                </Switch>
            </Container>
        </>
    )
}

export default Routes;