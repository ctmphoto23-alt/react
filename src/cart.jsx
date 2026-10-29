function Cart({ cart, removeFromCart, updateQuantity }) {
  const subtotal = cart.reduce((total, book) => {
  const price = book.salePrice ?? book.originalPrice;
  return total + price * (book.quantity ?? 1);
}, 0);
  return (
    <section id="cart">
      <div className="container">
        <h1>Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          cart.map((book, index) => (
            <div className="cart__item" key={`${book.id}-${index}`}> <button onClick={() => removeFromCart(index)}>
  Remove
</button>
<div className="cart__quantity">
  <button onClick={() => updateQuantity(book.id, -1)}>
    −
  </button>

  <span>{book.quantity ?? 1}</span>

  <button onClick={() => updateQuantity(book.id, 1)}>
    +
  </button>
</div>
              <img
                className="cart__item--img"
                src={book.url}
                alt={book.title}
              />
              <h2>{book.title}</h2>
              <p>Price: ${(book.salePrice ?? book.originalPrice).toFixed(2)}</p>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className="cart__subtotal">
            <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;