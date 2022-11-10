import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delBookApi } from '../redux/books/booksSlice';
import '../App.css';

function BookCard({ book }) {
  const dispatch = useDispatch();

  return (
    <section>
      <div>
        <h6>{book.category}</h6>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <div>
          <button
            type="button"
            onClick={() => {
              dispatch(delBookApi(book.item_id));
            }}
          >
            Remove
          </button>
          <hr />
        </div>
      </div>
    </section>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookCard;
