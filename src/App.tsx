import { useState } from 'react';
import './App.css';
import Shocard from './components/Shocard';
import Shoes from './Shoes';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState(Shoes);

  const handleSort = (type: string) => {
    const listData = [...Shoes];
    if (type == 'price') {
      listData.sort((a, b) => a.price - b.price);
    } else if (type == 'size') {
      listData.sort((a, b) => a.size - b.size);
    }
    setData(listData);
  };

  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <div className="bg-gray-200 grid grid-cols-4 p-1">
        <div className="border">Color</div>
        <div className="border">Type</div>
        <div className="border" onClick={() => handleSort('size')}>
          Size
        </div>
        <div className="border" onClick={() => handleSort('price')}>
          Price
        </div>
      </div>
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
