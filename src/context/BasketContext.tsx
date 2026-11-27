import { createContext } from 'react';
import type { ShoesType } from '../Shoes';
import { useContext } from 'react';

type BasketContextType = {
  basket: ShoesType[];
  addToBasket: (item: ShoesType) => void;
  removeItem: (item: ShoesType) => void;
};

// Here we store/create our context that holds the baskets inventory
export const BasketContext = createContext<BasketContextType | undefined>(undefined);

// Here we make a custom hook to make sure that basket is not undefined
export function useBasketContext() {
  const basket = useContext(BasketContext);

  if (basket === undefined) {
    throw new Error('useBasketContext need a BasketContext');
  }

  return basket;
}
