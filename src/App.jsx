import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import IdComponent from './[id]/';


export default function App() {

  return (
    <Router>
      <div>
        <div className="header-shadow">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<IdComponent />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
