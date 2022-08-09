import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import "./components/index.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer/>
      <Header />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
