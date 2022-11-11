import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookApi } from '../redux/books/booksSlice';

function Form() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const dispatch = useDispatch();

  const handleInputTitle = (bks) => {
    setBookTitle(bks.target.value);
  };

  const handleInputAuthor = (bks) => {
    setBookAuthor(bks.target.value);
  };

  const handleInputCategory = (bks) => {
    setBookCategory(bks.target.value);
  };

  const checkValidity = () => {
    if (!bookTitle || !bookAuthor || !bookCategory) return;
    const bookObj = {
      title: bookTitle,
      author: bookAuthor,
      category: bookCategory,
    };
    dispatch(addBookApi(bookObj));
    setBookTitle('');
    setBookAuthor('');
    setBookCategory('');
  };

  return (
    <section className="addBookContainer">
      <span className="addNewBook">ADD NEW BOOK</span>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          onChange={handleInputTitle}
          value={bookTitle}
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          onChange={handleInputAuthor}
          value={bookAuthor}
          required
        />
        <select
          onChange={handleInputCategory}
          value={bookCategory}
          required
        >
          <option selected><span className="optionSelected">Select Category</span></option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="Classic">Classic</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Suspense">Suspense</option>
          <option value="Thriller">Thriller</option>
          <option value="Tragedy">Tragedy</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" onClick={checkValidity}>
          ADD BOOK
        </button>
      </form>
    </section>
  );
}

export default Form;
