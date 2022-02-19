import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import AddItem from './AddItem'
import Content from './Content'
import SearchItem from './SearchItem'

const Home = () => {
    const { isLoading, search, items } = useContext(DataContext)

    return (
        <>
            <AddItem />
            <SearchItem />
            <main>
                {isLoading && <p>Loading Items...</p>}
                {!isLoading && <Content
                    items={items.filter(item =>
                        ((item.item).toLowerCase()).includes(search.toLowerCase())
                    )}
                />}
            </main>
        </>
    )
}

export default Home