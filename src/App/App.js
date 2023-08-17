import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "../screens/Home/Home.js";
import Header from "../components/Header/Header";
import Admin from "../screens/admin/Admin.js";
import About from "../screens/AboutUs/About";
import Servise from "../screens/Servise/Servise.js";
import Contact from "../screens/ContactUs/Contact";
import Reviews from "../screens/Reviews/Reviews";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../components/Footer/Footer";
import Login from "../screens/login/login";
const client = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <QueryClientProvider client={client}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-div">
                <Header />
                <Home />
                <About />
                <Servise />
                <Contact />
                <Reviews />
                <Footer />
              </div>
            }></Route>
          <Route path="/admin/:id" element={<Admin />}></Route>
          <Route path="/log-in-admin" element={<Login />}></Route>{" "}
        </Routes>{" "}
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
