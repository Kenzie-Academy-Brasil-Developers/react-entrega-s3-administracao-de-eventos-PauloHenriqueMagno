import { useContext, useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core"
import { CartContext } from "../providers/cart";
import { Button } from "./styled";
import { useLocation } from "react-router";

const AddToCartFooter = () => {
    const location = useLocation();
    
    const { shoppingCart, addToCart, removeFromCart} = useContext(CartContext)

    const [event, setEvent] = useState('');

    const handleChange = (event) => {
        setEvent(event.target.value);
    };

    const saveToEvent = () => {
        const alreadyHasThis = addToCart(shoppingCart, event.toLowerCase());

        removeFromCart({}, "clear");

        if(!!alreadyHasThis){
            addToCart(alreadyHasThis, "noAlert");
        }
    }

    return (
        <div className="container">
            {(
            location.pathname!=="/wedding"&&
            location.pathname!=="/confraternization"&&
            location.pathname!=="/graduation"
            )?<>

            <p>{shoppingCart.length} Items</p>
            <FormControl className="Form">
                <InputLabel>Choose event to add</InputLabel>
                <Select
                value={event}
                onChange={handleChange}
                label="Choose event to add"
                >
                <MenuItem value={"Wedding"}>Wedding</MenuItem>
                <MenuItem value={"Graduation"}>Graduation</MenuItem>
                <MenuItem value={"Confraternization"}>Confraternization</MenuItem>
                </Select>
            </FormControl>
            
            {!!event?

            <Button onClick={()=> saveToEvent()}>
                Add to {event}
            </Button>

            :<Button disabled>Add to</Button>}

            </>:<></>}

        </div>
    );
}
export default AddToCartFooter;