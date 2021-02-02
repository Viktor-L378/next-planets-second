import { FETCH_PLANETS } from '../actions/actionTypes';

const countInitialState = {data: []}

export default function reducer(state = countInitialState, action) {
  switch (action.type) {
    case FETCH_PLANETS:
      console.log(action.data)
      return {data: action.data}
    default:
      return state
  }
}