"use client"
import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
      <div>
      
      </div>
    )
}

export default AuthContext;