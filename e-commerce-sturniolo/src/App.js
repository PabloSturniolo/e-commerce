
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Super Market'}/>
    </div>
  );
}

export default App;
