import type { ShoesType } from '../Shoes';
import { useMemo, useState } from 'react';
import Shocard from './Shocard';

interface SortFilterProp {
  Shoes: ShoesType[];
}

const SortFilter = ({ Shoes }: SortFilterProp) => {
  const [sort, setSort] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [filterType, setFilterType] = useState<string>('');
  const [filterColor, setFilterColor] = useState<string>('');

  // Storing our data of Shoes
  const listData = useMemo(() => {
    let result = [...Shoes];

    if (sort) {
      if (sort.key == 'price') {
        result.sort((a, b) => (sort.direction === 'asc' ? a.price - b.price : b.price - a.price));
      } else if (sort.key == 'size') {
        result.sort((a, b) => (sort.direction === 'asc' ? a.size - b.size : b.size - a.size));
      }
    }

    if (filterColor) {
      result = result.filter((shoe) => shoe.color === filterColor);
    }

    if (filterType) {
      result = result.filter((shoe) => shoe.type === filterType);
    }

    return result;
  }, [Shoes, sort, filterColor, filterType]);

  const handleSort = (s: string) => {
    const direction = sort && sort.key === s && sort.direction === 'asc' ? 'desc' : 'asc';
    setSort({ key: s, direction });
  };

  const handleFilterColor = (color: string) => {
    setFilterColor(color);
  };

  const handleFilterType = (type: string) => {
    setFilterType(type);
  };

  return (
    <>
      <div className="bg-gray-200 grid grid-cols-4 p-1">
        <select
          className="border"
          value={filterColor}
          defaultValue=""
          onChange={(e) => handleFilterColor(e.target.value)}
        >
          <option value={''}>All Colors</option>
          <option value={'Yellow'}>Yellow</option>
          <option value={'Black'}>Black</option>
          <option value={'Brown'}>Brown</option>
          <option value={'White'}>White</option>
          <option value={'Blue'}>Blue</option>
          <option value={'Red'}>Red</option>
          <option value={'Grey'}>Grey</option>
          <option value={'Pink'}>Pink</option>
          <option value={'Green'}>Green</option>
          <option value={'Purple'}>Purple</option>
          <option value={'Orange'}>Orange</option>
        </select>
        <select
          className="border"
          value={filterType}
          defaultValue=""
          onChange={(e) => handleFilterType(e.target.value)}
        >
          <option value={''}>All Types</option>
          <option value={'Formal'}>Formal</option>
          <option value={'Sport'}>Sport</option>
          <option value={'Boots'}>Boots</option>
          <option value={'Sneakers'}>Sneakers</option>
          <option value={'Sandals'}>Sandals</option>
        </select>
        <div className="border" onClick={() => handleSort('size')}>
          Size{sort?.key === 'size' && (sort.direction === 'asc' ? '▲' : '▼')}
        </div>
        <div className="border" onClick={() => handleSort('price')}>
          Price{sort?.key === 'price' && (sort.direction === 'asc' ? '▲' : '▼')}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mx-4 mt-3 p-3 rounded-xl bg-gray-200">
        {listData.map((e) => {
          return (
            <Shocard name={e.name} type={e.type} size={e.size} color={e.color} price={e.price} />
          );
        })}
      </div>
    </>
  );
};

export default SortFilter;
