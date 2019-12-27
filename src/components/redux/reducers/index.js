import {
  SEARCH,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE
} from "../const/actionTypes";
import { movieData } from "../../data";

const initState = {
  movieData: movieData,
  search: "",
  rating: "",
  isLoading:false
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movieData: [...state.movieData, action.payload] };
    case EDIT_MOVIE:
      return {
        ...state,
        movieData: state.movieData.map(movie =>
          movie.id === action.payload.id
            ? {
                ...movie,
                name: action.payload.name,
                year: action.payload.year,
                rating: action.payload.rating
              }
            : movie
        )
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movieData: state.movieData.filter(movie => movie.id !== action.payload)
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload.search,
        rating: action.payload.rating,
        isLoading:action.payload.isLoading
      };

    default:
      return state;
  }
};

export default movieReducer;
