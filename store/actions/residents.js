import { FETCH_RESIDENTS } from "./actionTypes";
import planetsApi from "../../axios/planetsApi";

export const fetchResidents = (residentIds) => async (dispatch) => {
  const residentsPromises = residentIds.map((residentId) => {
    return planetsApi(`/people/${residentId}`);
  });
  const residentResponses = await Promise.all(residentsPromises);
  const residentInfo = residentResponses.map((response) => response.data);

  return dispatch({ type: FETCH_RESIDENTS, data: residentInfo });
};