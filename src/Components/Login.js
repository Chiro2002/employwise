import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });

      const { token } = response.data;
      localStorage.setItem("authToken", token);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        navigate("/users"); // Redirect to users list page
      }, 1000);
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
          EmployWise App
        </h1>
        <h2 className="text-lg font-semibold text-center text-gray-700 mb-6">
          User Login
        </h2>

        <div className="embed-responsive embed-responsive-5by3 d-flex justify-content-center">
                  <iframe
                    id="myiframe"
                    className="embed-responsive-item "
                    src="https://lottie.host/embed/3ce855b8-e242-419d-a029-2e778db903e9/1N4OVze4bW.json"
                    title="Responsive iframe"
                    allowFullScreen
                  />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 bg-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 bg-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
        {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}

        {success && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 text-center rounded">
            Login Successful! Redirecting...
          </div>
        )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
