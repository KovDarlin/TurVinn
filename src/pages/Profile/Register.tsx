import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/register', { email, password });
      alert('Реєстрація успішна! Тепер увійдіть.');
      navigate('/login');
    } catch (err) {
      alert('Користувач уже існує або помилка.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h2>Реєстрація</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Електронна пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Зареєструватись</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
