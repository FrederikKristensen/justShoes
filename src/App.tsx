import { useState } from 'react';
import './App.css';
import Shocard from './components/Shocard';
import Shoes from './Shoes';
import Navbar from './components/Navbar';
import SortFilter from './components/SortFilter';

function App() {
  const [data, setData] = useState(Shoes);

  return (
    <main>
      <Navbar />
      <SortFilter Shoes={Shoes} setData={setData} />
      <div className="grid grid-cols-3 gap-2 mx-4 mt-3 p-3 rounded-xl bg-gray-200">
        {data.map((e) => {
          return (
            <Shocard name={e.name} type={e.type} size={e.size} color={e.color} price={e.price} />
          );
        })}
      </div>
    </main>
  );
}

export default App;
