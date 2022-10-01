import React from 'react';
import PropTypes from 'prop-types';
import BookInfos from './BookInfos';

const BookCard = (props) => {
  const { books } = props;
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <BookInfos book={book} />
        </div>
      ))}
    </div>
  );
};

BookCard.propTypes = {
  books: PropTypes.node.isRequired,
};
export default BookCard;
