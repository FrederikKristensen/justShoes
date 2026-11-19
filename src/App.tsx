import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Basket from './pages/Basket';
import { BasketContext } from './context/BasketContext';
import { useState } from 'react';

function App() {
  const [basket] = useState([]);
  return (
    <>
      <BasketContext.Provider value={basket}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BasketContext.Provider>
    </>
  );
}

export default App;
