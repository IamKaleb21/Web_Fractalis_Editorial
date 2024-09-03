// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Aquí puedes añadir más rutas conforme desarrolles más páginas */}
      </Routes>
    </Router>
  );
}

export default App;
