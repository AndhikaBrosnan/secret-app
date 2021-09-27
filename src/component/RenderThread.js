import React from "react";
import CreateThread from "./CreateThread.js";
import ThreadList from "./ThreadList";

const RenderThread = (props) => {
  if (props.auth.isSignedIn) {
    return (
      <div>
        <CreateThread />
        <ThreadList />
      </div>
    );
  } else {
    return (
      <div>
        <div className="ui warning message">
          {/* <i className="close icon"></i> */}
          <div className="header">You need to sign in.</div>
          Don't worry, you can go anonymous when you post a thread
          <span style={{ fontSize: 25 }}>😝</span>
        </div>
      </div>
    );
  }
};

export default RenderThread;
