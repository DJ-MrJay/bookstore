import { v4 as uuidv4 } from 'uuid';

// Action Types
const ADDED_BOOK = 'ADDED_BOOK';
const REMOVED_BOOK = 'REMOVED_BOOK';

// Initial State
const initialState = [
  {
    item_id: uuidv4(),
    title: 'The Candy House',
    author: 'Jennifer Egan',
  },
  {
    item_id: uuidv4(),
    title: 'Sea of Tranquility',
    author: 'Emily St. John Mandel',
  },
  {
    item_id: uuidv4(),
    title: 'Verity',
    author: 'Colleen Hoover',
  },
];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, action.payload];
    case REMOVED_BOOK:
      return [...state.filter((books) => books.item_id !== action.payload.item_id)];
    default:
      return state;
  }
};

// Action creators
const addBook = (bookItem) => ({
  type: ADDED_BOOK,
  payload: {
    item_id: uuidv4(),
    title: bookItem.title,
    author: bookItem.author,
  },
});

const remBook = (bookID) => ({
  type: REMOVED_BOOK,
  payload: {
    item_id: bookID,
  },
});

export { addBook, remBook };
export default reducer;
