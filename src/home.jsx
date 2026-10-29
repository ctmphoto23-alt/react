import { Link } from "react-router-dom";
import Book from "./Book";
import { books } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBookOpen, faTags } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const featuredBooks = books.slice(0, 4);
  const discountedBooks = books.filter((book) => book.salePrice !== null).slice(0,4);


  return (
    <>
      <section id="landing">
        <div className="container">
          <h1>Welcome to Library!</h1>
          <p>Find your next favorite book.</p>
          <Link to="/books" className="browse-books">
            Browse Books
          </Link>
        </div>
      </section>

      <section id="featured">
        <div className="container">
          <h2>Featured Books</h2>
          <div className="books">
            {featuredBooks.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <section id="discounted">
        <div className="container">
          <h2>Discounted Books</h2>
          <div className="books">
            {discountedBooks.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <section id="highlights">
  <div className="container">
    <h2>
      Why choose <span className="purple">Library</span>
    </h2>
    <div className="highlight__wrapper">
      <div className="highlight">
        <div className="highlight__img">
          <FontAwesomeIcon icon={faBolt} />
        </div>
        <h3>Easy and quick</h3>
        <p>Get access to the book you purchased online instantly.</p>
      </div>
      <div className="highlight">
        <div className="highlight__img">
          <FontAwesomeIcon icon={faBookOpen} />
        </div>
        <h3>10,000+ books</h3>
        <p>Library has books in all your favourite categories.</p>
      </div>
      <div className="highlight">
        <div className="highlight__img">
          <FontAwesomeIcon icon={faTags} />
        </div>
        <h3>Affordable</h3>
        <p>Get your hands on popular books at affordable prices.</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Home;
