import { useState } from "react"
import CartButton from "./components/Cart-button"

const availableItemsList = [
  { id: 1, name: "Black T shirt", price: 5 },
  { id: 2, name: "Hanger Set", price: 8 },
  { id: 3, name: "Thoub", price: 12 },
  { id: 4, name: "Computer Bag", price: 20 },
  { id: 5, name: "Couch", price: 50 },
  { id: 6, name: "Gaming Chair", price: 70 }
];

function app() {
  const [availableItems, setAvailableItems] = useState(availableItemsList)
  const [shoppingCart, setShoppingCart] = useState([])
  const [availableBalance, setAvailableBalance] = useState(100)
  const [warningMessage, setWarningMessage] = useState("")

  const handelAddToCart = (item) => {
    if (availableBalance >= item.price) {
      setAvailableItems(availableItems.filter((i) => i.id !== item.id))
      setShoppingCart([...shoppingCart, item])
      setAvailableBalance(availableBalance - item.price)
      if (availableBalance - item.price === 0) {
      } else {
        setWarningMessage("insufficient funds. Your balace is loow to purchese this item!")
        setTimeout(() => {
          setWarningMessage("")
        }, 4000)
      }
    }





    return (
    
      

    
  
  );


    export default App;