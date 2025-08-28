// src/components/HeroSection.jsx
export default function HeroSection() {
  const sampleBooks = [
    { title: "Atomic Habits", img: "https://covers.openlibrary.org/b/id/9251998-L.jpg" },
    { title: "The Alchemist", img: "https://covers.openlibrary.org/b/id/8226191-L.jpg" },
    { title: "Harry Potter", img: "https://covers.openlibrary.org/b/id/7884866-L.jpg" },
    { title: "The Hobbit", img: "https://covers.openlibrary.org/b/id/6979861-L.jpg" },
    { title: "1984", img: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  ];

  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">📚 Book Finder</h1>
        <p className="lead">
          Discover your next favorite read — Search by title and explore millions of books.
        </p>
        {/* Sample Books Preview */}
        <div className="mt-5 d-flex flex-wrap justify-content-center gap-4">
          {sampleBooks.map((book, index) => (
            <div
              key={index}
              className="text-center"
              style={{ width: "130px" }}
            >
              <div
                style={{
                  width: "130px",
                  height: "190px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src={book.img}
                  alt={book.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <p className="mt-2 small">{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
