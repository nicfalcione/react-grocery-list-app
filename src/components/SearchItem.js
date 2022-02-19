import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../index.css'

const SearchItem = () => {
  const {search, setSearch} = useContext(DataContext)

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