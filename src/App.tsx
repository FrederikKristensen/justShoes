import { useState } from 'react';
import './App.css';
import Shocard from './components/Shocard';
import Shoes from './Shoes';

function App() {
  const [data, setData] = useState(Shoes);

  const handleSort = (type: string) => {
    const listData = [...Shoes];
    if (type == 'price') {
      listData.sort((a, b) => a.price - b.price);
    }
    setData(listData);
  };

  return (
    <main>
      <div>Navbar</div>
      <div onClick={() => handleSort('price')}>Price</div>
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
