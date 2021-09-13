import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { reduxForm, reset } from "redux-form";
import { postThread } from "../actions";

//WHY does this work?!
const afterSubmit = (formProps, dispatch) => dispatch(reset("threadCreate"));

//ntar di rapiin di folder baru.
const submitFormAction = (payload) => ({
  type: "SUBMIT_FORM",
  payload: [payload],
});

const CreateThread = () => {
  const dispatch = useDispatch();
  const [inputThread, setInputThread] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!inputThread) {
      setError("Please fill this textarea");
      return;
    }
    const response = await postThread(inputThread);
    console.log("response di createThread", response);
    // validasi.
    setInputThread("");
    dispatch({
      type: "SUBMIT_FORM",
      payload: [response],
    });
  };

  const handleInputChange = (event) => {
    setInputThread(event.target.value);
  };

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label>
            <h4>Create Thread</h4>
          </label>

          {/* redux form Field*/}
          <div name="field">
            <textarea
              value={inputThread}
              onChange={handleInputChange}
              rows="3"
              type="text"
              placeholder="What's Happpening?"
            ></textarea>
            <span className=" error">{error}</span>
          </div>
        </div>
        <button onClick={handleSubmit} className="ui primary button">
          Share
        </button>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return { postThread: state.postThread, posts: state.posts };
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
  onSubmitSuccess: afterSubmit,
  validate,
})(createThreadComponent);
