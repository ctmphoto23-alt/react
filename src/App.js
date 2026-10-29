import "./App.css";
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
import { useState } from "react";
import Footer from "./Footer"; 
function App() {
  const [cart, setCart] = useState([]);

function addToCart(book) {
  setCart((currentCart) => {
    const existingBook = currentCart.find(
      (item) => item.id === book.id
    );

    if (existingBook) {
      return currentCart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: (item.quantity ?? 1) + 1,
            }
          : item
      );
    }

    return [
      ...currentCart,
      {
        ...book,
        quantity: 1,
      },
    ];
  });
}
function removeFromCart(indexToRemove) {
  setCart((currentCart) =>
    currentCart.filter((book, index) => index !== indexToRemove)
  );
}

function updateQuantity(bookId, amount) {
  setCart((currentCart) =>
    currentCart
      .map((book) =>
        book.id === bookId
          ? {
              ...book,
              quantity: (book.quantity ?? 1) + amount,
            }
          : book
      )
      .filter((book) => book.quantity > 0)
  );
}

  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
