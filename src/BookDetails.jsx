import { books } from "./data";
import { useParams, Link } from "react-router-dom";
function BookDetails({ addToCart }) {
  const { id } = useParams();

  const book = books.find(
    (book) => book.id === Number(id)
  );

  if (!book) {
    return <h2>Book not found!</h2>;
  }

  return (
    <section id="book-details">
      <div className="container">
        <Link to="/books" className="back__link">
  ← Back to Books
</Link>
        <div className="book__details">
  <img
    className="book__details--img"
    src={book.url}
    alt={book.title}
  />

  <div className="book__details--info">
    <h1>{book.title}</h1>
    <p>⭐ {book.rating} / 5</p>
    <h2>${book.salePrice ?? book.originalPrice}</h2>
    <h3>About this book</h3>
<p className="book__description">
  {book.description || "No description available yet."}
</p>
<button
  className="btn__cart"
  onClick={() => addToCart(book)}
>
  Add to Cart
</button>
  </div>
</div>
        <p>
          Price: ${book.salePrice ?? book.originalPrice}
        </p>
      </div>
    </section>
  );
}

export default BookDetails;