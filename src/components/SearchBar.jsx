import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSearch(value.trim());
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="Search by book title..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Col>
        <Col sm={3}>
          <Button variant="primary" type="submit" className="w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
