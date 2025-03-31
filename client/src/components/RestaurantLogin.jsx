import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { Mail, Lock } from "lucide-react";

const RestaurantLogin = () => {
  const [organizationEmail, setOrganizationEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/resturent/login", {
        Organization_Email: organizationEmail,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        api.setToken(response.data.token);
        navigate("/");
      } else {
        setError("Login failed. No token received.");
      }
    } catch (error) {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transition-all">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Restaurant 
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="email"
                value={organizationEmail}
                onChange={(e) => setOrganizationEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full outline-none text-sm bg-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
              <Lock className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full outline-none text-sm bg-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition text-sm font-semibold shadow"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantLogin;
