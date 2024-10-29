// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy loading de las páginas
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Store = lazy(() => import('./pages/Store'));
const Courses = lazy(() => import('./pages/Courses'));
const ProductPage = lazy(() => import('./pages/ProductPage')); // Importa la página de producto
const CartPage = lazy(() => import('./pages/CartPage')); // Importa la página de carrito

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/productos/:id" element={<ProductPage />} />
          <Route path="/shopcart" element={<CartPage />} />
          {/* {<Route path="*" element={<NotFound />} /> Página 404 */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

