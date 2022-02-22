import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'
import '../index.css'

const SearchItem = () => {
  const search = useStoreState((state) => state.search)
  const setSearch = useStoreActions((actions) => actions.setSearch)

  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem