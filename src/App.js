import './App.css';
import { useContext } from "react"
import { ShoppingContext } from './providers/shopping';

function App() {
  const { shoppingList } = useContext(ShoppingContext)

  return (
    <div className="App">

    </div>
  );
}

export default App;
