
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Cart from './component/Cart';
import Header from './component/Header';

function App() {
  return (
   <div>
   
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/cart' element={<Cart/>}/>
    <Route  path='/' element={<Header/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
