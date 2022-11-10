import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookApi } from '../redux/books/booksSlice';

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
    if (!bookTitle || !bookAuthor) return;
    const bookObj = {
      title: bookTitle,
      author: bookAuthor,
    };
    dispatch(addBookApi(bookObj));
    setBookTitle('');
    setBookAuthor('');
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form>
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
        <button type="submit" className="addBookApi" onClick={checkValidity}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Form;
