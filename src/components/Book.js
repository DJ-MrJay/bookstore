import React from 'react';
import Form from './Form';
import BookCard from './BookCard';

const Book = () => {
  const books = [
    {
      id: 1,
      title: 'The Candy House',
      author: 'Jennifer Egan',
    },
    {
      id: 2,
      title: 'Sea of Tranquility',
      author: 'Emily St. John Mandel',
    },
  ];

  return (
    <>
      <BookCard books={books} />
      <Form />
    </>
  );
};

export default Book;
