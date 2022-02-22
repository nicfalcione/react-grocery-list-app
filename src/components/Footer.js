import { useStoreState } from 'easy-peasy';
import React from 'react';
import '../index.css';

const Footer = () => {
    const itemCount = useStoreState((state) => state.itemCount)

    return (
        <footer>
            <p>{itemCount} List {itemCount === 1 ? "item" : "Items"}</p>
        </footer>
    )
}

export default Footer