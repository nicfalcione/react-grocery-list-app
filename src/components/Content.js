import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import DataContext from '../context/DataContext';
import '../index.css';
import ItemList from './ItemList';

const Content = ({ items }) => {
    const { search, fetchError } = useContext(DataContext)

    return (
        <>
            {items.length ? (<ItemList items={items} />) : !fetchError ? (
                <p style={{ marginTop: '2rem' }}>
                    {search ? 'No results found!' : 'Your List is empty!'}
                </p>
            ) : (toast.error(fetchError))
            }
        </>
    )
}

export default Content