import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { postThread } from "../actions";

const renderInput = (formProps) => {
  return (
    <textarea
      {...formProps.input}
      rows="3"
      type="text"
      placeholder="What's Happpening?"
    ></textarea>
  );
};

const onSubmit = (formProps) => {
  console.log(formProps);
};

const CreateThread = (props) => {
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={props.handleSubmit(onSubmit)}>
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
  return { posts: state.posts };
};

const createThreadComponent = connect(mapStatetoProps, { postThread })(
  CreateThread
);

export default reduxForm({
  form: "streamCreate",
})(createThreadComponent);
