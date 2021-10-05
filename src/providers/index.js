import { ShoppingProvider } from "./shopping";
import { CartProvider } from "./cart";

const Providers = ({children}) => {
    return (
        <ShoppingProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ShoppingProvider>
    )
}

export default Providers