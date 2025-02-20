import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MovieContext } from "./context/MovieProvider";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <MovieContext>
          <AppRouter />
        </MovieContext>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
