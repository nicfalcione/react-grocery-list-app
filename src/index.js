import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './Store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App/>} />
      </Routes>
    </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);