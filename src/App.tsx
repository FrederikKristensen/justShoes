import './App.css';
import Shoes from './Shoes';
import Navbar from './components/Navbar';
import SortFilter from './components/SortFilter';

function App() {
  return (
    <main>
      <div className="h-screen overflow-y-auto">
        <Navbar />
        <SortFilter Shoes={Shoes} />
      </div>
    </main>
  );
}

export default App;
