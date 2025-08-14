import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ProductList from './components/ProductList';
import { useSelector } from 'react-redux';
import type { RootState } from './store';

const App = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Rota protegida: só acessa produtos se estiver autenticado */}
        <Route path="/produtos" element={
          token ? <ProductList /> : <Navigate to="/login" replace />
        } />
        {/* Redireciona / para /produtos se logado, senão para login */}
        <Route path="/" element={
          token ? <Navigate to="/produtos" replace /> : <Navigate to="/login" replace />
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
