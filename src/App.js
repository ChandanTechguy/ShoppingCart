import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Loginform} from './Component/Login';
import Compile from './Component/Compile';
import ProductDetails from './Component/Productdetails';



function App() {
  return (
    <div>
      
      <Router>
      <Routes>
        <Route path="/" element={<Loginform/>}/>
        <Route path="/products" element={<Compile/>}/>
        <Route path= {`/productDetails/:id`} element={<ProductDetails/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
