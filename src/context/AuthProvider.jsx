import { signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { auth } from "../auth/firebase";

export const AuthContext = createContext();

//* with custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  const createUser = async (email,password) => {
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {}
  };

  const values = { currentUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
