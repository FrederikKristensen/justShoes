import './App.css';
import Shocard from './components/Shocard';
import Shoes from './Shoes';

function App() {
  return (
    <>
      <div>
        {Shoes.map((e) => {
          return <Shocard id={e.id} type={e.type} size={e.size} color={e.color} price={e.price} />;
        })}
      </div>
    </>
  );
}

export default App;
