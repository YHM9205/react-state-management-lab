import { useState } from "react";
import CartButton from "./components/Cart-button";
import "./App.css";

const availableItemsList = [
  { id: 1, name: "Black T shirt", price: 5 },
  { id: 2, name: "Hanger Set", price: 8 },
  { id: 3, name: "Thoub", price: 12 },
  { id: 4, name: "Computer Bag", price: 20 },
  { id: 5, name: "Couch", price: 50 },
  { id: 6, name: "Gaming Chair", price: 70 }
];

function App() {
  const [availableItems, setAvailableItems] = useState(availableItemsList);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(100);
  const [warningMessage, setWarningMessage] = useState("");

  const handleAddToCart = (item) => {
    if (availableBalance >= item.price) {
      setAvailableItems(availableItems.filter((i) => i.id !== item.id));
      setShoppingCart([...shoppingCart, item]);
      setAvailableBalance(availableBalance - item.price);
      setWarningMessage("");
    } else {
      setWarningMessage("Insufficient funds. Your balance is too low to purchase this item!");
      setTimeout(() => {
        setWarningMessage("");
      }, 4000);
    }
  };

  const handleRemoveFromShoppingCart = (item) => {
    setShoppingCart(shoppingCart.filter((i) => i.id !== item.id));
    setAvailableItems([...availableItems, item]);
    setAvailableBalance(availableBalance + item.price);
  };

  return (
    <div className="App">
      <h1>Sayed Hameds Closet</h1>
      <h2>Your Balance: ${availableBalance}</h2>

      {warningMessage && <p style={{ color: "red", fontWeight: "bold" }}>{warningMessage}</p>}

      <h2>Available Items</h2>
      {availableItems.length === 0 ? (
        <p>No available items left!</p>
      ) : (
        <div>
          {availableItems.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <p>{item.name} - ${item.price}</p>
              <CartButton onAdd={() => handleAddToCart(item)} />
            </div>
          ))}
        </div>
      )}

      <h2>Shopping Cart</h2>
      {shoppingCart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <div>
          {shoppingCart.map((item) => (
            <div key={item.id} style={{ border: "1px dashed #666", margin: "10px", padding: "10px" }}>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => handleRemoveFromShoppingCart(item)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;