import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from './BookCard';
import { fetchBookApi } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApi());
    // eslint-disable-next-line
  }, [books.length]);

  if (books.length) {
    return (
      <div>
        {books[0].map((book) => <BookCard key={book.item_id} book={book} />)}
      </div>
    );
  }
}

export default BookList;
