import { action, computed, createStore, thunk } from "easy-peasy";
import { toast } from 'react-toastify';
import GroceryApi from "./api/GroceryApi";

export default createStore({
    items: [],
    setItems: action((state, payload) => {
        state.items = payload
    }),
    search: '',
    setSearch: action((state, payload) => {
        state.search = payload
    }),
    isLoading: true,
    fetchError: '',
    itemCount: computed((state) => state.items.length),
    getItemById: computed((state) => {
        return (id) => state.items.find(item => item.id === id)
    }),
    addItem: thunk(async (actions, newItem, helpers) => {
        const { items } = helpers.getState()

        try {
            const response = await GroceryApi.post('/items', newItem)
            actions.setItems([...items, response.data])
        } catch (error) {
            toast.error(error.message)
        }
    }),
    deleteItem: thunk(async (actions, id, helpers) => {
        const { items } = helpers.getState()

        try {
            await GroceryApi.delete(`/items/${id}`)
            const itemsAfterDelete = items.filter(item => item.id !== id)
            actions.setItems(itemsAfterDelete)
        } catch (error) {
            toast.error(error.message)
        }
    }),
    handleCheck: thunk(async (actions, id, helpers) => {
        const { items } = helpers.getState()

        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item)
        actions.setItems(listItems);
        const myItem = listItems.filter((item) => item.id === id)
        const patch = { checked: myItem[0].checked }

        try {
            await GroceryApi.patch(`/items/${id}`, patch)
        } catch (error) {
            toast.error(error.message)
        }
    })
})