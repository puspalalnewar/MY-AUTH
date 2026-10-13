import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const PublicRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${API_URL}/auth/user`, {
          method: "GET",
          credentials: "include",
        });

        const result = await res.json();

        setIsAuthenticated(res.ok && result.success === true);
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <p>Checking authentication...</p>;
  }

  return isAuthenticated ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PublicRoute;
