import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Book from "./components/layout/Books/Books.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Book />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
