import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const dispatch = useDispatch();
  const handleInputTitle = (bks) => {
    setBookTitle(bks.target.value);
  };

  const handleInputAuthor = (bks) => {
    setBookAuthor(bks.target.value);
  };

  const checkValidity = () => {
    if (!bookTitle) return;
    const bookObj = {
      title: bookTitle,
      author: bookAuthor,
    };
    dispatch(addBook(bookObj));
    setBookTitle('');
    setBookAuthor('');
  };

  return (
    <section className="addBookContainer">
      <div className="line" />
      <span className="addNewBook">ADD NEW BOOK</span>
      <form className="formContainer">
        <input
          type="text"
          className="inputBookTitle"
          placeholder="Book Title"
          onChange={handleInputTitle}
          value={bookTitle}
          required
        />
        <input
          type="text"
          className="inputBookAuthor"
          placeholder="Book Author"
          onChange={handleInputAuthor}
          value={bookAuthor}
          required
        />
        <button type="submit" className="addBook" onClick={checkValidity}>
          ADD BOOK
        </button>
      </form>
    </section>
  );
}

export default Form;
