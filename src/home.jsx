function Home() {
  const handleBrowse = () => {
  window.location.href = "/books";
};
  return (
    <section id="landing">
      <div className="container">
        <h1>Welcome to Library!</h1>
        <p>Find your next favorite book.</p>
        <button onClick={handleBrowse}>Browse Books</button>
      </div>
    </section>
  );
}

export default Home;
