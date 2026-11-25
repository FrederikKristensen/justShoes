import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Basket from './pages/Basket';
import { BasketContext } from './context/BasketContext';
import { useState } from 'react';
import type { ShoesType } from './Shoes';
import Profile from './pages/Profile';

function App() {
  const [basket, setBasket] = useState<ShoesType[]>([]);

  const addToBasket = (item: ShoesType) => {
    setBasket((prev) => [...prev, item]);
  };

  return (
    <>
      <BasketContext.Provider value={{ basket, addToBasket }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BasketContext.Provider>
    </>
  );
}

export default App;
