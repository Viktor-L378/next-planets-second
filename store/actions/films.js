import { FETCH_FILMS } from "./actionTypes";
import planetsApi from "../../axios/planetsApi";

export const fetchFilms = (filmIds) => async (dispatch) => {
  const filmsPromises = filmIds.map((filmId) => {
    return planetsApi(`/films/${filmId}`);
  });
  const filmsResponses = await Promise.all(filmsPromises);
  const filmsInfo = filmsResponses.map((response) => response.data);

  return dispatch({ type: FETCH_FILMS, data: filmsInfo });
};
