import {Navbar} from './Components/Navbar';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import {HomePage} from './Components/HomePage';
import {ProductsPage} from './Components/ProductsPage';
import {ProductsDetailsPage} from './Components/ProductsDetailsPage';

function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/products/:id" element={<ProductsDetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
