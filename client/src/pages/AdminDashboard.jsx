import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
    const decoded = JSON.parse(atob(token.split(".")[1]));
    if (decoded.role !== "admin") return navigate("/dashboard");

    axios
      .get("http://localhost:5000/api/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMessage(res.data.msg))
      .catch((err) => {
        alert(err.response?.data?.msg || "Can't access admin");
        navigate("/dashboard");
      });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      <header className="bg-white shadow-md p-4 text-center">
        <h1 className="text-2xl font-bold text-blue-700">Admin Dashboard</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg text-center space-y-6">
          <p className="text-xl">{message}</p>
          <Link
            to="/admin/users"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base px-5 py-2.5 rounded-lg shadow-md transition duration-200 ease-in-out"
          >
            Manage Users
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
