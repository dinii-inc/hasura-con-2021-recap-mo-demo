import { createContext } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";

type AuthContextType = {
  token: string | null;
  updateToken: (token: string | null) => void;
};

const AuthContext = createContext<AuthContextType>({ token: null, updateToken: () => {} });

export const useAuth = () => useContext(AuthContext);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState(typeof window !== "undefined" ? localStorage.getItem("token") : null);

  const updateToken = useCallback((token: string | null) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    setToken(token);
  }, []);

  return <AuthContext.Provider value={{ token, updateToken }}>{children}</AuthContext.Provider>;
};
