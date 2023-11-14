'use client';

import { useContext, useReducer, createContext, ReactNode, Dispatch } from "react";
import { AuthReducer } from "./AuthReducer";

interface AuthState {
  userId: string | null;
  email: string | null;
  token: string | null;
}

interface AuthContextProps {
  state: AuthState;
  dispatch: Dispatch<any>;
}

const userContext = createContext<AuthContextProps | null>(null);

const intialState: AuthState = {
  userId: null,
  email: null,
  token: null,
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, intialState);
    
  
  return (
    <userContext.Provider value={{ state, dispatch    }}>
      {children}
    </userContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(userContext)!;
 

