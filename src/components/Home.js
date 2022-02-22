import { useStoreState } from 'easy-peasy'
import React from 'react'
import AddItem from './AddItem'
import Content from './Content'
import SearchItem from './SearchItem'

const Home = ({ isLoading, fetchError }) => {
    const search = useStoreState((state) => state.search)
    const items = useStoreState((state) => state.items)

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
                    fetchError={fetchError}
                />}
            </main>
        </>
    )
}

export default Home