import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Book from "./components/Books/Books";
import BookDetails from "./components/BookDetail/BookDetails";
import Search from "./components/layout/Navbar/Search";
import LoginSignUp from "./components/User/LoginSignUp";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/books/:keyword" element={<Book />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
