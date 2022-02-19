import { createContext, useEffect, useState } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [items, setItems] = useState([])
    const [search, setSearch] = useState('')
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/items')

    useEffect(() => {
        setItems(data)
    }, [data])

    return (
        <DataContext.Provider value={{
            search, setSearch, items, 
            setItems, fetchError, isLoading
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext