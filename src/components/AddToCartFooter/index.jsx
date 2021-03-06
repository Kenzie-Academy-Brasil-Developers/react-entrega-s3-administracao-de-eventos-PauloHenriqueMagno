import { useContext, useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core"
import { CartContext } from "../../providers/cart";
import { Button } from "../styled";
import { useLocation } from "react-router";

const AddToCartFooter = () => {
    const location = useLocation();
    
    const { 
        shoppingCart,
        addToCart,
        removeFromCart
    } = useContext(CartContext)

    const [event, setEvent] = useState('');

    const handleChange = (event) => {
        setEvent(event.target.value);
    };

    const saveToEvent = () => {
        const alreadyHasThis = addToCart(shoppingCart, event.toLowerCase());

        removeFromCart({}, "clear");

        if(!!alreadyHasThis){
            addToCart(alreadyHasThis, "noAlert");
        };
    }

    return (
        <div className="container">
            {(
            location.pathname!=="/wedding"&&
            location.pathname!=="/confraternization"&&
            location.pathname!=="/graduation"
            )?<>

            <p>{!!shoppingCart?shoppingCart.length:0} Items</p>
            <FormControl className="Form">
                <InputLabel>Choose event</InputLabel>
                <Select
                value={event}
                onChange={(e)=> handleChange(e)}
                label="Choose event"
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