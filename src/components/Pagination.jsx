import React from 'react';
import { Pagination as BPagination } from 'react-bootstrap';

export default function Pagination({ current, perPage, total, onChange }) {
  const totalPages = Math.ceil(total / perPage);

  const makePages = () => {
    const pages = [];
    const start = Math.max(1, current - 2);
    const end = Math.min(totalPages, current + 2);
    for (let p = start; p <= end; p++) pages.push(p);
    return pages;
  };

  return (
    <BPagination className="justify-content-center mt-4">
      <BPagination.Prev onClick={() => onChange(current - 1)} disabled={current === 1} />
      {makePages().map((p) => (
        <BPagination.Item key={p} active={p === current} onClick={() => onChange(p)}>
          {p}
        </BPagination.Item>
      ))}
      <BPagination.Next onClick={() => onChange(current + 1)} disabled={current === totalPages} />
    </BPagination>
  );
}
