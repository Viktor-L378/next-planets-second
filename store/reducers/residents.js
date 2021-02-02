import { FETCH_RESIDENTS } from '../actions/actionTypes';

const initialState = {data: []}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESIDENTS:
      return {...state, data: action.data}
    default:
      return state
  }
}