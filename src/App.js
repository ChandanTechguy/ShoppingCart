import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Compile from './Component/Compile';
import { Loginform } from './Component/Login';

function App() {
  return (
    <div>
      
      <Router>
      <Routes>
        <Route path="/" element={<Loginform/>}/>
        <Route path="/products" element={<Compile/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
