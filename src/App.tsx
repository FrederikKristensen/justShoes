import './App.css';
import Shoes from './Shoes';
import Navbar from './components/Navbar';
import SortFilter from './components/SortFilter';

function App() {
  return (
    <main>
      <Navbar />
      <SortFilter Shoes={Shoes} />
    </main>
  );
}

export default App;
