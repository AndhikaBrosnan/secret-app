import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { postThread } from "../actions";

const renderError = ({ error, touched }) => {
  if (error && touched) {
    return (
      <div className="ui error message">
        <div className="text">{error} </div>
      </div>
    );
  } else {
  }
};

const renderInput = (formProps) => {
  return (
    <div name="field">
      <textarea
        {...formProps.input}
        rows="3"
        type="text"
        placeholder="What's Happpening?"
      ></textarea>
      <div>{renderError(formProps.meta)}</div>
    </div>
  );
};

// # Alternative to make an action.
const onSubmit = (formProps) => {
  postThread(formProps.postThread);
};

const CreateThread = (props) => {
  return (
    <div className="ui segment">
      {/* handleSubmit aja ga usah ke Action bisa dipanggil redux-form nya == onSubmit={props.handleSubmit}*/}
      <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
        <div className="field">
          <label>
            <h4>Create Thread</h4>
          </label>

          {/* redux form Field*/}
          <Field name="postThread" component={renderInput} />
        </div>
        <button className="ui primary button">Share</button>
      </form>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return { postThread: state.postThread };
};

const createThreadComponent = connect(mapStatetoProps, { postThread })(
  CreateThread
);

const validate = (formValue) => {
  const errors = {};

  if (!formValue.postThread) {
    errors.postThread = "Fill to post Thread.";
  }
  return errors;
};

export default reduxForm({
  form: "threadCreate",
  validate,
})(createThreadComponent);
