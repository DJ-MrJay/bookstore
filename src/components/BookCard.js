import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

const BookCard = (props) => {
  const { books } = props;
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <Books book={book} />
        </div>
      ))}
    </div>
  );
};

BookCard.propTypes = {
  books: PropTypes.node.isRequired,
};
export default BookCard;
