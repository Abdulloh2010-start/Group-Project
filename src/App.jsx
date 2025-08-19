import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/product/Product';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
  );
};