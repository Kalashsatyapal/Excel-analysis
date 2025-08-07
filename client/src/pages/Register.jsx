import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user', passkey: '' });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      navigate('/login');
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-10 space-y-4">
      <input placeholder="Name" className="w-full p-2 border" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" className="w-full p-2 border" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="w-full p-2 border" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select className="w-full p-2 border" onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      {form.role === 'admin' && (
        <input placeholder="Admin Passkey" className="w-full p-2 border" onChange={e => setForm({ ...form, passkey: e.target.value })} />
      )}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
  );
};

export default Register;
