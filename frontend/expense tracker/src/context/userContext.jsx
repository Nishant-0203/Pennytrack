import React, { createContext, useEffect, useState } from "react";

// Create Context
export const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  // hydrate user from localStorage on mount if present
  useEffect(() => {
    try {
      const storedUserJson = localStorage.getItem("user");
      if (storedUserJson) {
        const parsedUser = JSON.parse(storedUserJson);
        setUser(parsedUser);
      }
    } catch (_error) {
      // ignore malformed storage
    }
  }, []);

  // Function to update user data
  const updateUser = (userData) => {
    setUser(userData);
    try {
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (_error) {
      // ignore storage error
    }
  };

  // Function to clear user data (e.g., on logout)
  const clearUser = () => {
    setUser(null);
    try {
      localStorage.removeItem("user");
    } catch (_error) {}
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
