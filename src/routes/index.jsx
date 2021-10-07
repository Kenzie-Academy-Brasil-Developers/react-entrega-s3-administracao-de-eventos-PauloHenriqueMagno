import { Switch, Route } from "react-router-dom"
import AddToCartFooter from "../components/AddToCartFooter"
import Carts from "../components/Carts"
import HeaderMain from "../components/HeaderMain"
import ShoppingList from "../components/ShoppingList"
import { Container, Footer } from "../components/styled"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

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

            <Footer>
                <Container>
                    <AddToCartFooter />
                </Container>
            </Footer>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default Routes;