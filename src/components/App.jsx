"use client";
import React, { useEffect, useState } from "react"
import ShoppingList from "./ShoppingList";

const App = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemName.trim() !== '') {
      const newItem = {
        name: itemName,
        id: Math.random().toString(36).substring(2, 11)
      };
      setItems([...items, newItem]);
      setItemName('');
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleImageChange = (e) => {
    setBackgroundImage(e.target.value);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <h1>Alışveriş Listesi</h1>
        <input
          type="text"
          placeholder="https://images.unsplash.com/photo-1513171920216-2640b288471b?q="
          value={backgroundImage}
          onChange={handleImageChange}
          style={{ marginBottom: '10px' }}
        />
        <form onSubmit={handleAddItem} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Ürün adı girin"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <button type="submit">Ekle</button>
        </form>
        <ShoppingList items={items} onDeleteItem={handleDeleteItem} />
      </div>
     
    </div>
  );
};




export default App