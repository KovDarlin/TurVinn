// src/pages/Login/Login.tsx
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    axios.post('http://localhost:3001/api/login', { email, password })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/profile');
      })
      .catch((err) => {
        alert('Невірний email або пароль');
        console.error(err);
      });
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Вхід до кабінету</h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Увійти</button>
        <p>Немає акаунту? <a href="/register">Зареєструйтесь</a></p>

      </form>
    </div>
    
  );
};

export default Login;
