import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-10 space-y-4">
      <input placeholder="Email" className="w-full p-2 border" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="w-full p-2 border" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Login</button>
    </form>
  );
};

export default Login;
