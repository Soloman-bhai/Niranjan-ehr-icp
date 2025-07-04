import { useEffect, useState } from "react";
 //import { SwasthyaAccess_backend } from "../../declarations/SwasthyaAccess_backend/SwasthyaAccess_backend.did";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* future pages go here */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
