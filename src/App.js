import "./app.css";
import Nav from "./nav";
import Home from "./home";
import Books from "./books";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BookDetails from "./BookDetails";
import Cart from "./cart";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>    </BrowserRouter>
  );
}

export default App;
