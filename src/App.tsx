import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ErrorBoundary from './components/ErrorBoundaty';

const Home = () => <h2>Página Inicial</h2>;

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Carrinho</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;