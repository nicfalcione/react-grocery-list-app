import { useStoreState } from 'easy-peasy';
import React from 'react';
import { toast } from 'react-toastify';
import '../index.css';
import ItemList from './ItemList';

const Content = ({ items, fetchError }) => {
    const search = useStoreState((state) => state.search)

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