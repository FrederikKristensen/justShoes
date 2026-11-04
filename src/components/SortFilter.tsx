import type { ShoesType } from '../Shoes';
import { useState } from 'react';

interface SortFilterProp {
  Shoes: ShoesType[];
  setData: React.Dispatch<React.SetStateAction<ShoesType[]>>;
}

const SortFilter = ({ Shoes, setData }: SortFilterProp) => {
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
    <>
      <div className="bg-gray-200 grid grid-cols-4 p-1">
        <div className="border">Color</div>
        <div className="border">Type</div>
        <div className="border" onClick={() => handleSort('size')}>
          Size{sort?.key === 'size' && (sort.direction === 'asc' ? '▲' : '▼')}
        </div>
        <div className="border" onClick={() => handleSort('price')}>
          Price{sort?.key === 'price' && (sort.direction === 'asc' ? '▲' : '▼')}
        </div>
      </div>
    </>
  );
};

export default SortFilter;
