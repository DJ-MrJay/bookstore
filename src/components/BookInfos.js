import React from 'react';
import PropTypes from 'prop-types';

const BookInfos = (props) => {
  const { book } = props;
  return (
    <>
      <p>
        Book Title:&nbsp;
        {book.title}
      </p>
      <p>
        Book Author:&nbsp;
        {book.author}
      </p>
      <button type="button">Remove</button>
    </>
  );
};

BookInfos.propTypes = {
  book: PropTypes.node.isRequired,
};

export default BookInfos;
