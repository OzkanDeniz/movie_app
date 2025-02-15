import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

export const AuthContext = createContext();

//* with custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password) => {
    try {
      //? firebase method used to create a new user
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      toastSuccessNotify("Registered succeffully");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      //? Firebase method used to log in the current user
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      toastSuccessNotify("Logged in  successffully");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toastSuccessNotify("Logged out successfully");
      })
      .catch((error) => {
        // An error happened.
        toastErrorNotify(error.message);
      });
  };

  const userObserver = () => {
    //? Firebase method that tracks whether the user is signed in or not and returns the new user as a response when the user changes.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoUrl } = user;
        setCurrentUser({ email, displayName, photoUrl });
      } else {
        // User is signed out
        // ...
        setCurrentUser(false);
      }
    });
  };

  const values = { currentUser, createUser, signIn, logOut };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
