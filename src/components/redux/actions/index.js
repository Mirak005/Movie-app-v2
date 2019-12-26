import {
  SEARCH,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE
} from "../const/actionTypes";

export const search = payload => {
  return { type: SEARCH, payload };
};
export const addMovie = payload => {
  return { type: ADD_MOVIE, payload };
};
export const editMovie = payload => {
  return { type: EDIT_MOVIE, payload };
};
export const deleteMovie = payload => {
  return { type: DELETE_MOVIE, payload };
};
