import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const dispatch = useDispatch();
  const bookObj = {
    title: bookTitle,
    author: bookAuthor,
  };
  dispatch(addBook(bookObj));
  setBookTitle('');
  setBookAuthor('');

  return (
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Book author" />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default Form;
