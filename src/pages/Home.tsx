import Shoes from '../Shoes';
import SortFilter from '../components/SortFilter';

const Home = () => {
  return (
    <main>
      <div className="h-screen overflow-y-auto">
        <SortFilter Shoes={Shoes} />
      </div>
    </main>
  );
};

export default Home;
