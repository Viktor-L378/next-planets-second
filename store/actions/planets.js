import { FETCH_PLANETS } from "./actionTypes";
import planetsApi from "../../axios/planetsApi";

export const fetchPlanets = () => async (dispatch) => {
  const allPlanetsList = [];
  let pageNumber = 1;
  const res = await planetsApi.get("/planets", {
    params: { page: pageNumber },
  });

  Array.prototype.push.apply(allPlanetsList, res.data.results);
  const pageCount = Math.ceil(res.data.count / res.data.results.length);
  console.log(pageCount - pageNumber);
  const allPlanetsReq = new Array(pageCount - pageNumber).fill(null).map(() => {
    pageNumber++;
    return planetsApi.get("/planets", {
      params: { page: pageNumber },
    });
  });
  console.log(allPlanetsReq);
  const allResponses = await Promise.all(allPlanetsReq);
  allResponses.map((response) =>
    Array.prototype.push.apply(allPlanetsList, response.data.results)
  );

  return dispatch({ type: FETCH_PLANETS, data: allPlanetsList });
};
