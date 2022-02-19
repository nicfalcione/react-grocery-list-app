import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import '../index.css';

const Footer = () => {
    const { items } = useContext(DataContext)

    return (
        <footer>
            <p>{items.length} List {items.length === 1 ? "item" : "Items"}</p>
        </footer>
    )
}

export default Footer