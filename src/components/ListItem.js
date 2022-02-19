import React, { useContext } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import api from '../api/GroceryApi';
import DataContext from '../context/DataContext';

const ListItem = ({ item }) => {

    const {items, setItems } = useContext(DataContext)

    const deleteItem = async (id) => {
        try {
            await api.delete(`/items/${id}`)
            const itemsAfterDelete = items.filter(item => item.id !== id)
            setItems(itemsAfterDelete)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleCheck = async (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems);
        const myItem = listItems.filter((item) => item.id === id)
        const patch = { checked: myItem[0].checked }

        try {
            await api.patch(`/items/${id}`, patch)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <li className='item'>
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt
                role="button"
                onClick={() => deleteItem(item.id)}
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default ListItem