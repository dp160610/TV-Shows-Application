import { useReducer } from "react";
import axios from "axios";
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
} from "../types";
const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  const getTodayShows = async (date) => {
    dispatch({type: SET_LOADING})
    const { data } = await axios.get(
      `https://api.tvmaze.com/schedule?country=US&date=${date}`
    );
    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  }

  const getFullShows = async () => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.tvmaze.com/schedule`
    );
    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  const getSingleShow = async (id) => {
    dispatch({
      type: SET_LOADING,
    });

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data,
    });
  };

  const clearSingleShow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        getSingleShow,
        clearSingleShow,
        getTodayShows,
        getFullShows
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
