import React from "react";

const CreateThread = () => {
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label>
            <h4>Create Thread</h4>
          </label>
          <textarea
            rows="3"
            type="text"
            placeholder="What's Happpening?"
          ></textarea>
        </div>
        <button className="ui primary button">Share</button>
      </form>
    </div>
  );
};

export default CreateThread;
