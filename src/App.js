import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieProvider from "./context/MovieProvider";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <MovieProvider>
          <AppRouter />
        </MovieProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
