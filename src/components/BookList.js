import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

function BookList(props) {
  const {
    books,
  } = props;
  return (
    <div>
      {books.map((book) => <BookCard key={book.item_id} book={book} />)}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
