import Menu from './Menu'
import {Route,Routes} from "react-router-dom";
import Cart from './Cart';
import Home from './Home';

export default function App()
{
  return <>
  <Menu/>

  <hr></hr>

  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
  </Routes>

  
  </>
}

