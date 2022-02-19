import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from "./components/Home";
import Layout from './components/Layout';
import { DataProvider } from './context/DataContext';
import './index.css';

function App() {

  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;