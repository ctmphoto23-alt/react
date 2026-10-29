import { books } from "./data";
import Book from "./Book";
import { useState } from "react";
function Books() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const handleReset = () => {
  setSearchTerm("");
  setSort("");
};
  const filteredBooks = books
  .filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    const priceA = a.salePrice ?? a.originalPrice;
    const priceB = b.salePrice ?? b.originalPrice;

    if (sort === "low") {
      return priceA - priceB;
    }

    if (sort === "high") {
      return priceB - priceA;
    }

    return 0;
  });
  return (
    <section id="books">
      <div className="container">
        <h1>Browse Books</h1>
        <p className="books__count">
  Showing {filteredBooks.length} books
</p>
        <div className="books__search">
  <input
  type="text"
  placeholder="Search for a book..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>
<select
  value={sort}
  onChange={(event) => setSort(event.target.value)}
>
  <option value="">Sort Books</option>
  <option value="low">Price: Low to High</option>
  <option value="high">Price: High to Low</option>
</select>
<button onClick={handleReset}>
  Reset Filters
</button>
</div>
        <div className="books">
           {filteredBooks.length > 0 ? (
  filteredBooks.map((book) => (
    <Book key={book.id} book={book} />
  ))
) : (
  <p>No books found. Try another search!</p>
)}
          
        </div>
      </div>
    </section>
  );
}

export default Books;