import React, { useState, useEffect, useCallback } from 'react';
import NavbarComp from './components/Navbar';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Pagination from './components/Pagination';
import HeroSection from './components/HeroSection';

const RESULTS_PER_PAGE = 12;

export default function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [numFound, setNumFound] = useState(0);

  const searchBooks = useCallback(async (q, p = 1) => {
    if (!q || !q.trim()) {
      setBooks([]);
      setNumFound(0);
      return;
    }
    setLoading(true);
    setError('');

    try {
      const offset = (p - 1) * RESULTS_PER_PAGE;
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(q)}&limit=${RESULTS_PER_PAGE}&offset=${offset}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();

      setBooks(data.docs || []);
      setNumFound(data.numFound || 0);
    } catch (err) {
      setError('Failed to fetch books. Please try again.');
      setBooks([]);
      setNumFound(0);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (query) searchBooks(query, page);
  }, [query, page, searchBooks]);

  const handleSearch = (q) => {
    setPage(1);
    setQuery(q);
  };

  return (
    <div>
      <NavbarComp />
      <div className="container my-4">
        <HeroSection />
        <div id="search" className="mt-5">
          <SearchBar onSearch={handleSearch} />
        </div>

        {error && <div className="alert alert-danger text-center">{error}</div>}
        {!error && !loading && !books.length && query && (
          <div className="alert alert-warning text-center">
            No results found for “{query}”
          </div>
        )}
        {loading && <div className="text-center my-3">Loading...</div>}

        <BookList books={books} />

        {numFound > RESULTS_PER_PAGE && (
          <Pagination
            current={page}
            perPage={RESULTS_PER_PAGE}
            total={numFound}
            onChange={(p) => setPage(p)}
          />
        )}
      </div>
    </div>
  );
}
