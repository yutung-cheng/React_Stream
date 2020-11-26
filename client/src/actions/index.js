import streams from '../apis/Streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth; //get userId.
  const response = await streams.post('/streams', { ...formValues, userId }); //Wrap userId into formValue

  dispatch({ type: CREATE_STREAM, payload: response.data });
  // Programmatic Navigation to get the user back to
  // root route after recieved the action creator (new formValue).
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

//change the formValues as well
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues); //put -> change all the properties. patch -> change some properties

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/'); //After Edited the Stream, direct back to Stream list
};

//Delete doesn't need response.
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
