import axios from "axios";

import { SET_BOOKS, ADD_BOOK } from "./actionTypes";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchBooks = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://the-index-api.herokuapp.com/api/books/"
      );
      const books = res.data;
      dispatch({
        type: SET_BOOKS,
        payload: books
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postBook = book => {
  return async dispatch => {
    try {
      const res = await axios.post(
        "https://the-index-api.herokuapp.com/api/books/",
        book
      );
      const newBook = res.data;
      dispatch({
        type: ADD_BOOK,
        payload: newBook
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };
};
