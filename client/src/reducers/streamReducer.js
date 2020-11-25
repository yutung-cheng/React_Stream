import _ from 'lodash';
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    //List of records
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };

    //Get one record
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    //Create record
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    //Update a record
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    //Delete a record
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    // No need id.when we dispatch an action of type, the payload is the id itself.

    default:
      return state;
  }
};
