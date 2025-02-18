import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";

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

  const createUser = async (email, password, displayName) => {
    try {
      //? firebase method used to create a new user
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName,
        // displayName: displayName if key:value the same we can write as above
      });
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

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Enable Google sign-in
  //* => Authentication => settings => Authorized domains => add domain
  //! After deploying the project, add the deploy link to the domain list for Google sign-in to work

  const googleProvider = () => {
    //? Firebase method used to sign in with Google
    const provider = new GoogleAuthProvider();
    //? Firebase method used to log in with a pop-up window
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
        toastSuccessNotify("Logged in succesfully");
      })
      .catch((error) => {
        console.log(error);
        toastErrorNotify(error.message);
      });
  };

  const forgotPassword = (email) => {
    //? Firebase method used for password reset via email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastWarnNotify("Please check your mail box!")
      })
      .catch((error) => {
        toastErrorNotify(error.message)
      });
  };
  console.log(currentUser);
  const values = { currentUser, createUser, signIn, logOut, googleProvider,forgotPassword };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
