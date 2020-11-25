import { combineReducers } from 'redux';
//import a name, rename it using 'as' so we wont mess up
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  //redux-form
  auth: authReducer,
  form: formReducer,
  streams: streamReducer 
});
