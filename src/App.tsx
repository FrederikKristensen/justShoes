import { useState } from 'react';
import './App.css';
import Shocard from './components/Shocard';
import Shoes from './Shoes';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState(Shoes);
  const [sort, setSort] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const handleSort = (type: string) => {
    const listData = [...Shoes];
    const direction = sort && sort.key === type && sort.direction === 'asc' ? 'desc' : 'asc';
    if (type == 'price') {
      listData.sort((a, b) => (direction === 'asc' ? a.price - b.price : b.price - a.price));
    } else if (type == 'size') {
      listData.sort((a, b) => (direction === 'asc' ? a.size - b.size : b.size - a.size));
    }

    setSort({ key: type, direction });
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
          Size {sort?.key === 'size' && (sort.direction === 'asc' ? '▲' : '▼')}
        </div>
        <div className="border" onClick={() => handleSort('price')}>
          Price{sort?.key === 'price' && (sort.direction === 'asc' ? '▲' : '▼')}
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
