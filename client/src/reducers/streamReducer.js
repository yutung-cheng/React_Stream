import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    //Get one record
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    //Create record
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    //Update a record
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    //List of records
    case FETCH_STREAMS:
      return;

    //Delete a record
    case DELETE_STREAM:
      return;

    default:
      return state;
  }
};
