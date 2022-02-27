import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import NavbarAuthenticated from "./components/layout/NavbarAuthenticated/NavbarAuthenticated";
import Footer from "./components/layout/Footer/Footer";
import Book from "./components/Books/Books";
import BookDetails from "./components/BookDetail/BookDetails";
import Search from "./components/layout/Navbar/Search";
import LoginSignUp from "./components/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./components/layout/Navbar/UserOptions";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div className="App">
      <Router>
        {isAuthenticated ? (
          <div>
            <NavbarAuthenticated /> <UserOptions user={user} />
          </div>
        ) : (
          <Navbar />
        )}
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
