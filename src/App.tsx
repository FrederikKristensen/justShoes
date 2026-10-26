import './App.css';
import Shocard from './components/Shocard';
import Shoes from './Shoes';

function App() {
  return (
    <main>
      <div>Navbar</div>
      <div className="grid grid-cols-3 gap-2 mx-4 mt-3 p-3 rounded-xl bg-gray-200">
        {Shoes.map((e) => {
          return <Shocard type={e.type} size={e.size} color={e.color} price={e.price} />;
        })}
      </div>
    </main>
  );
}

export default App;
