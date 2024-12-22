import "./App.css";
import Login from "./Components/Login";
import Users from "./Components/Users";
import EditUser from "./Components/EditUser";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

// Function to check if user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

// Layout Wrapper to Conditionally Show Header with Logout
const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/";

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear local storage
    navigate("/"); // Redirect to login page
  };

  return (
    <>
      {!isLoginPage && (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
          <h1 className="text-center">EmployWise App</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
          >
            Logout
          </button>
        </header>
      )}
      {children}
    </>
  );
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Public Route */}
            <Route exact path="/" element={<Login />} />

            {/* Protected Route */}
            <Route exact path="/users" element={<ProtectedRoute element={<Users />} />} />
  <Route exact path="/users/edit/:id" element={<ProtectedRoute element={<EditUser />} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
