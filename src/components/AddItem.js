import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../index.css';

const AddItem = () => {
    const inputRef = useRef();
    const [newItem, setNewItem] = useState('')
    const items = useStoreState((state) => state.items)
    const addItemAction = useStoreActions((actions) => actions.addItem)

    const addItem = (e) => {
        e.preventDefault()

        if (newItem) {
            const newId = items.length ? items[items.length - 1].id + 1 : 1
            const item = { id: newId, checked: false, item: newItem }
            addItemAction(item)
            setNewItem('')
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