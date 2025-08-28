import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BookCard from './BookCard';

export default function BookList({ books }) {
  return (
    <Row>
      {books.map((b) => (
        <Col key={`${b.key}-${b.cover_i || 'nocover'}`} sm={6} md={4} lg={3} className="mb-4">
          <BookCard book={b} />
        </Col>
      ))}
    </Row>
  );
}
