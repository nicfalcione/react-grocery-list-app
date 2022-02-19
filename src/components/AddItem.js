import React, { useContext, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import api from '../api/GroceryApi';
import DataContext from '../context/DataContext';
import '../index.css';

const AddItem = () => {
    const inputRef = useRef();
    const [newItem, setNewItem] = useState('')
    const { items, setItems } = useContext(DataContext)

    const addItem = async (e) => {
        e.preventDefault()

        if (newItem) {
            const newId = items.length ? items[items.length - 1].id + 1 : 1
            const item = { id: newId, checked: false, item: newItem }

            try {
                const response = await api.post('/items', item)
                const allItems = [...items, response.data]
                setItems(allItems)
                setNewItem('')
            } catch (error) {
                toast.error(error.message)
            }
        }
    }

    return (
        <form className='addForm' onSubmit={addItem}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem