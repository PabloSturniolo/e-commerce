import './App.css';
import { useState } from 'react'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  // const [page, setPage] = useState({ path: 'list', param: ''})

  return (
    <div className="App">
        {/* <Navbar />
        <div>
          <button onClick={() => setPage({ path: 'list'})}>list</button>
          <button onClick={() => setPage('detail')}>detail</button>
        </div>
        {page.path === 'list' && <ItemListContainer greeting="Todos los productos" setPage={setPage}/>}
        {page.path === 'detail' && <ItemDetailContainer /> } */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
           
            
        </BrowserRouter>
    </div>
  );
}

export default App;
