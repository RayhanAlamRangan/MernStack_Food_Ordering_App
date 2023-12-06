
import './App.css';

import { Routes,Route}  from 'react-router-dom';

import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import Signup from './Components/signup/Signup';
import Login from './Components/login/Login';
import Create from './Components/create/Create';
import Foodcatalog from './Components/foodCatalog/Foodcatalog';
import Cart from './Components/cart/Cart';
import Checkout from './Components/checkout/Checkout';
import Bigfooter from './Components/bigfooter/Bigfooter';


function App() {
  return (
  <div>

<Navbar/>






<Routes>


<Route path="/"  element={  <Home/>} />
<Route path="/signup"  element={<Signup/>}/>
 <Route path="/login"  element={<Login/>}/>
  <Route path="/create" element={<Create/>}/>
  <Route path="/food/:id"  element={<Foodcatalog/>}/>
  <Route path="/foods/:id"  element={<Foodcatalog/>}/>
  <Route path="/cart"  element={<Cart/>}/>
  <Route path="/checkout"  element={<Checkout/>}/>

</Routes>




<Bigfooter/>




    </div>
  );
}

export default App;
