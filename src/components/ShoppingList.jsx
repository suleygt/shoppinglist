"use client";
import React, { useState} from 'react'
import App from './App';

const ShoppingList = ({ items, onDeleteItem }) => {
  return (
    <div>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {items.map(item => (
        <li key={item.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{item.name}</span>
          <button onClick={() => onDeleteItem(item.id)}>Sil</button>
        </li>
      ))}
    </ul>
  </div>
  )  }

export default ShoppingList