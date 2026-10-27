import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Book({ book }) {
  const navigate = useNavigate();
  const fullStars = Math.floor(book.rating);
  const hasHalfStar = !Number.isInteger(book.rating);

  return (
    <div
  className="book"
  onClick={() => navigate(`/books/${book.id}`)}
>
      <figure className="book__img--wrapper">
        <img className="book__img" src={book.url} alt={book.title} />
      </figure>
      <div className="book__title">
        <span className="book__title--link">{book.title}</span>
      </div>
      <div className="book__ratings">
        {Array.from({ length: fullStars }, (_, i) => (
          <FontAwesomeIcon icon={faStar} key={i} />
        ))}
        {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      </div>
      <div className="book__price">
        {book.salePrice !== null ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
}

export default Book;
