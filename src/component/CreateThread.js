import React from "react";
import { Field, reduxForm } from "redux-form";

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

const CreateThread = () => {
  return (
    <div className="ui segment">
      <form className="ui form">
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

export default reduxForm({
  form: "streamCreate",
})(CreateThread);
