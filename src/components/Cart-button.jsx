import { useState } from "react";

const [adding, setAdding] = useState(false);

function handelClick() {
    if (adding) return;
    setAdding(true)
    setTimeout(() => setAdding(false), 2500)
}
return (
    <div className="Sayedscloset">
        <h1>Sayed Hamed Closet</h1>
        <h2>Your Balance:{availableBalance}</h2>

        {warningMessage && <p style={{ color: 'red', fontWeight: 'bold' }}>{warningMessage}</p>}

        <h2>Available Items</h2>
        {availableItems.length === 0 ? (
            <p>No available items left!</p>) : (
            <div>
                {availableItems.map((item) => (
                    <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <p>{item.name} - ${item.price}</p>
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        )}
        <h2>Shoping Cat </h2>
        {shoppingCart.length === 0 ? (
            <p>Your shopping cart is empty.</p>) : (
            <div>
                {shoppingCart.map((item) => (
                    <div key={item.id} style={{ border: '1px dashed #666', margin: '10px', padding: '10px' }}>
                        <p>{item.name} - ${item.price}</p>
                        <RemoveButton onRemove={() => handleRemoveFromShoppingCart(item)} />
                    </div>
                ))}
            </div>
        )}
    </div>

)
