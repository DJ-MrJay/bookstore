import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { book } = props;
  return (
    <>
      <p>
        Book title:
        {book.title}
      </p>
      <p>
        Book author:
        {book.author}
      </p>
      <button type="button">Remove</button>
    </>
  );
};

Books.propTypes = {
  book: PropTypes.node.isRequired,
};

export default Books;
