import { Route, Routes } from 'react-router-dom';
import "./app.css";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Olim from './pages/Olim';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/olim" element={<Olim />}/>
      </Routes>
  );
};