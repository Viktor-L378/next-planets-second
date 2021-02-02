import { FETCH_FILMS } from '../actions/actionTypes';

const initialState = {data: []}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILMS:
      return {...state, data: action.data}
    default:
      return state
  }
}