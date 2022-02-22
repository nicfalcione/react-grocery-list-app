import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from "./components/Home";
import Layout from './components/Layout';
import useAxiosFetch from './hooks/useAxiosFetch';
import './index.css';

function App() {
  const setItems = useStoreActions((actions) => actions.setItems)
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/items')

    useEffect(() => {
        setItems(data)
    }, [data, setItems])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home isLoading={isLoading} fetchError={fetchError}/>} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;