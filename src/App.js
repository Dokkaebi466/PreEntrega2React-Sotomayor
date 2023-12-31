import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
      
      {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}/> */}
    </div>
  );
}

export default App;