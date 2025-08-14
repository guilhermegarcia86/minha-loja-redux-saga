import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../features/auth/authSlice';
import type { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((state: RootState) => state.auth.loading);
  const error = useSelector((state: RootState) => state.auth.error);
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/produtos', { replace: true });
    }
  }, [token, navigate]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(loginRequest({ username, password }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
};

export default Login;
