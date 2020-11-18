import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  //pass reference to that function -> 'meta' is for showing error messages
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    ); //new syntax, take all those key value pairs and add them as properties to the input element
  };

  onSubmit = formValue => {
    console.log(formValue);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

//Validate -> Check the input statement
const validate = formValue => {
  const error = {};
  if (!formValue.title) {
    //Only run if the user did not enter the title
    error.title = "Please Enter a Title!";
  }
  if (!formValue.description) {
    error.description = "Please Enter Description!";
  }

  return error;
};
//form:'FORM_NAME'
export default reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);
