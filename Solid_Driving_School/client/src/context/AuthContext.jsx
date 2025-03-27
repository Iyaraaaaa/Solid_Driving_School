import { createContext, useContext, useState, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext();

// Custom hook for easy access to the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// AuthContextProvider Component
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user exists in localStorage and set initial state
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("chat-user"));
    if (storedUser) {
      setAuthUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // Function to log the user in and save user data
  const login = ({ token,username,firstname,lastname,photo }) => {
    setAuthUser({username,firstname,lastname,photo});
    setIsLoggedIn(true);
    localStorage.setItem("access_token", token);
  };

  // Function to log the user out and clear user data
  const logout = () => {
    setAuthUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("chat-user");
  };

  // Provide value to the context
  return (
    <AuthContext.Provider value={{ authUser, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
