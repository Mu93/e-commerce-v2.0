// AuthContext.js
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { setTokenToLocalStorage } from "src/constants/handleStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setAuthToken(data.token);
        setTokenToLocalStorage(data.token);
      } else {
        toast.error("Invalid credentials");
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  const register = async (email, username, password) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        toast.error("Registration failed");
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration", error);
    }
  };

  const logout = () => {
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};
