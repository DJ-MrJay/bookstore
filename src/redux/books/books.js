// Action Types
const ADDED_BOOK = 'ADDED_BOOK';
const REMOVED_BOOK = 'REMOVED_BOOK';

// Initial State
const initialState = [];

// Action Creators
const addBook = () => ({
  type: ADDED_BOOK,
});

const remBook = () => ({
  type: REMOVED_BOOK,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return state.push(action.books);
    case REMOVED_BOOK:
      return [state.filter((books) => books !== action.item_id)];
    default:
      return state;
  }
};

export { addBook, remBook };
export default reducer;
