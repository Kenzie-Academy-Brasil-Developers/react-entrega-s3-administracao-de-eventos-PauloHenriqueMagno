import { useContext } from "react";
import { ShoppingContext } from "../providers/shopping";
import ShowItems from "./ShowItems";
import { ItemsList } from "./styled";

const ShoppingList = () => {
    const { shoppingList } = useContext(ShoppingContext)

    return (
        <ItemsList>
            {shoppingList.map(item => ShowItems(item))}
        </ItemsList>
    )
}

export default ShoppingList;