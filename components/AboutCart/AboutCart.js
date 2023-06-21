import { useState } from 'react';
export default function AboutCart(){
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 10, quantity: 2 },
        { id: 2, name: 'Product 2', price: 20, quantity: 1 },
        { id: 3, name: 'Product 3', price: 15, quantity: 3 },
      ]);
    
      const removeItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
      };
    
      const getTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      };
    
      return <>
      
   <div>
    <h2>Корзина</h2>
    {cartItems.map(item => (
      <div key={item.id}>
        <img src={/img{item.id}.jpg} alt={item.name} /}></img>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
        <p>{item.price * item.quantity}</p>
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    ))}
    <h3>Total: {getTotal()}</h3>
  </div>
  </>
    };