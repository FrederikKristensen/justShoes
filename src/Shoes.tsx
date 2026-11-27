const Images = import.meta.glob<string>('./assets/*.png', {
  eager: true,
  query: 'url',
  import: 'default',
});

export type ShoesType = {
  id: number;
  name: string;
  type: string;
  size: number;
  color: string;
  price: number;
  image: string;
};

const Shoes: ShoesType[] = [
  {
    id: 1,
    name: 'Shadow Sneaker',
    type: 'Sneakers',
    size: 3,
    color: 'Black',
    price: 200,
    image: Images['./assets/blacksneakers.png'],
  },
  {
    id: 2,
    name: 'Ocean Sprint',
    type: 'Sport',
    size: 8,
    color: 'Blue',
    price: 450,
    image: Images['./assets/bluesport.png'],
  },
  {
    id: 3,
    name: 'Timber Trail',
    type: 'Boots',
    size: 10,
    color: 'Brown',
    price: 700,
    image: Images['./assets/brownboots.png'],
  },
  {
    id: 4,
    name: 'Classic Heritage',
    type: 'Formal',
    size: 6,
    color: 'Brown',
    price: 150,
    image: Images['./assets/brownformal.png'],
  },
  {
    id: 5,
    name: 'Sunburst',
    type: 'Sandals',
    size: 9,
    color: 'Brown',
    price: 550,
    image: Images['./assets/brownsandals.png'],
  },
  {
    id: 6,
    name: 'Midnight Oxford',
    type: 'Sneakers',
    size: 11,
    color: 'Brown',
    price: 850,
    image: Images['./assets/brownsneakers.png'],
  },
  {
    id: 7,
    name: 'Crimson Flex',
    type: 'Sneakers',
    size: 7,
    color: 'Red',
    price: 350,
    image: Images['./assets/redsneakers.png'],
  },
  {
    id: 8,
    name: 'Pure vacation',
    type: 'Sandals',
    size: 5,
    color: 'Gray',
    price: 400,
    image: Images['./assets/graysandals.png'],
  },
  {
    id: 9,
    name: 'Stonewalker',
    type: 'Boots',
    size: 8,
    color: 'Black',
    price: 650,
    image: Images['./assets/blackboots.png'],
  },
  {
    id: 10,
    name: 'Pink Breeze',
    type: 'Sandals',
    size: 4,
    color: 'Pink',
    price: 180,
    image: Images['./assets/pinksandals.png'],
  },
  {
    id: 11,
    name: 'Forest Dash',
    type: 'Sneakers',
    size: 12,
    color: 'Green',
    price: 600,
    image: Images['./assets/greensneakers.png'],
  },
  {
    id: 12,
    name: 'Cloud Sandal',
    type: 'Sneakers',
    size: 9,
    color: 'White',
    price: 900,
    image: Images['./assets/whitesneakers.png'],
  },
  {
    id: 13,
    name: 'Blaze Sport',
    type: 'Sport',
    size: 10,
    color: 'Orange',
    price: 300,
    image: Images['./assets/orangesport.png'],
  },
];

export default Shoes;
