import './App.css';
import AddPlant from './Components/AddPlant';
import PlantCard from './Components/PlantCard';
import { useStore } from './data/store';

function App() {
  const { plants } = useStore((state) => { return { plants: state.plants } });
  console.log(plants);
  return (
    <>
      <h1>OUR PLANTS</h1>
      {plants.map((plant, i) => (<PlantCard plant={plant} key={i} />))}
      <AddPlant />
    </>
  )
}

export default App
