"use client"
import {
  createContext,
  useContext,
  
  ReactNode,
} from "react";
import useLocalStorage from "./hooks/useLocalStorage";


interface User {
  id: number;
  name: string;
  email: string;
  address: string | null;
  phone: string | null;
}

interface AuthContextType {
  userData: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useLocalStorage<User | null>("user", null);

  function login(user: User) {
    setUserData(user);
  }

  function logout() {
    setUserData(null); 
  };

  return (
    <AuthContext.Provider value={{ userData, isAuthenticated: !!userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
