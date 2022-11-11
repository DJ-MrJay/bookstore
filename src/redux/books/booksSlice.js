import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Initial State
const initialState = [];

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OSuqVqjthBIuZFwhmPiZ/books';

// Async Action Creators
export const fetchBookApi = createAsyncThunk('fetchBookApi', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addBookApi = createAsyncThunk('addBookApi', async (input) => {
  const response = await axios.post(url, {
    item_id: uuidv4(),
    title: input.title,
    author: input.author,
    category: input.category,
  });
  return response.data;
});

export const delBookApi = createAsyncThunk('delBookApi', async (input) => {
  const response = await axios.delete(`${url}/${input}`);
  return response.data;
});

// Slice Reducer
const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [fetchBookApi.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload)
        .map((bks) => ({
          item_id: bks,
          completed: Math.floor(Math.random() * 100),
          currentLesson: `Chapter ${Math.floor(Math.random() * 15)}`,
          ...action.payload[bks][0],
        }));
      return [books];
    },
    [addBookApi.fulfilled]: (state, action) => [...state, action.payload],
    // eslint-disable-next-line
    [delBookApi.fulfilled]: (state, action) => [...state.filter((bks) => bks.item_id !== action.payload.item_id)],
  },
});

export default booksSlice.reducer;
