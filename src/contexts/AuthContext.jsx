import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  function login(email, password) {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      localStorage.setItem("user", JSON.stringify(storedUser));
      return true;
    }

    return false;
  }

  function register(username, email, password) {
    const newUser = { username, email, password };

    localStorage.setItem("registeredUser", JSON.stringify(newUser));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}