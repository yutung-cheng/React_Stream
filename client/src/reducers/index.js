import { combineReducers } from "redux";
//import a name, rename it using 'as' so we wont mess up
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  //redux-form
  form: formReducer
});
