import type { ShoesType } from '../Shoes';
import { useMemo, useState } from 'react';
import Shocard from './Shocard';
import { IoIosColorPalette } from 'react-icons/io';
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { TbRulerMeasure } from 'react-icons/tb';
import { IoIosPricetag } from 'react-icons/io';
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
      <div className="grid grid-cols-4">
        <div className="grid grid-cols-3 pt-1 gap-3 mx-auto col-span-3">
          <div className="flex items-center border border-gray-400 rounded-lg bg-gray-200 text-center p-1">
            <IoIosColorPalette />
            <select
              className="px-1"
              value={filterColor}
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
          </div>
          <div className="flex items-center border border-gray-400 rounded-lg bg-gray-200 text-center p-1">
            <HiMiniSquares2X2 />
            <select
              className="px-1"
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
          </div>
          <div
            className="flex items-center border border-gray-400 rounded-lg bg-gray-200 text-center p-1"
            onClick={() => handleSort('size')}
          >
            <TbRulerMeasure className="mx-0.5" />
            Size{sort?.key === 'size' && (sort.direction === 'asc' ? ' ▲' : ' ▼')}
          </div>
        </div>
        <div className="pt-1 mx-auto place-items-end">
          <div
            className="flex items-center border border-gray-400 rounded-lg bg-gray-200 text-center p-1"
            onClick={() => handleSort('price')}
          >
            <IoIosPricetag className="mx-0.5" />
            Price{sort?.key === 'price' && (sort.direction === 'asc' ? ' ▲' : ' ▼')}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mx-1 mt-1 p-3 rounded-xl bg-gray-200">
        {listData.map((e) => {
          return (
            <Shocard
              id={e.id}
              name={e.name}
              type={e.type}
              size={e.size}
              color={e.color}
              price={e.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default SortFilter;
