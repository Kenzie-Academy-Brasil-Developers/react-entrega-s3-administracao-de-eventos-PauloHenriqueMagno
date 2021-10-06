import { useContext } from "react";
import { CartContext} from "../providers/cart";
import { Button, ItemComponent, Image } from "./styled";

const ShowItems = (item, removable = false) =>{
    const { addToCart, removeFromCart } = useContext(CartContext)

    const maxLength = (string) =>{
        return string.length > 100 ? string.substring(0, 100) + " ..." : string;
    }

    return (
        <ItemComponent key={item.id}>
            <Image>
                <img src={item.image_url} alt={item.name} />
            </Image>
            <div className="info">
                <h3>{item.name}</h3>
                <p>{maxLength(item.description)}</p>
                <p>{item.volume.value} {item.volume.unit}</p>
                <p>First brewed: {item.first_brewed}</p>
            </div>
            {
                removable?
                <Button onClick={()=> removeFromCart(item)}>Remove</Button>:
                <Button onClick={()=> addToCart(item)}>Add</Button>
            }
        </ItemComponent>
    )
}

export default ShowItems;