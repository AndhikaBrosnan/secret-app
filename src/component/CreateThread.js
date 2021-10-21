import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { postThread } from "../redux/action/thread";
import { submitFormAction } from "../redux/action/thread";

const CreateThread = (props) => {
  const dispatch = useDispatch();
  const [inputThread, setInputThread] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!inputThread) {
      setError("Please fill this thread.");
      return;
    }

    const response = await postThread(inputThread, props.auth);

    // validasi.
    setInputThread("");
    dispatch(submitFormAction(response));
  };

  const handleInputChange = (event) => {
    setInputThread(event.target.value);
  };

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label>
            <div className="">
              <img
                className="ui avatar mini image"
                alt=""
                src={
                  props.auth.profile ? props.auth.profile.getImageUrl() : null
                }
              />
              <span style={{ fontSize: "0,8rem" }}>
                {props.auth.profile ? props.auth.profile.getName() : null}
              </span>
            </div>
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
            <span className="ui error">{error}</span>
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
  return { postThread: state.postThread, posts: state.posts, auth: state.auth };
};

const createThreadComponent = connect(mapStatetoProps, { postThread })(
  CreateThread
);

export default createThreadComponent;
