import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const decode = JSON.parse(atob(token.split('.')[1]));
    setUser(decode);
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {user && <p>Welcome, {user.role.toUpperCase()}</p>}
    </div>
  );
};

export default Dashboard;
