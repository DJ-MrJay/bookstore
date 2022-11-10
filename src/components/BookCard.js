import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remBook } from '../redux/books/books';
import '../App.css';

function BookCard({ book }) {
  const dispatch = useDispatch();
  return (
    <section>
      <div>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <button type="button" onClick={() => dispatch(remBook(book.item_id))}>Remove</button>
        <hr />
      </div>
    </section>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookCard;
