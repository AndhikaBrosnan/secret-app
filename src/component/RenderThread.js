import React, { useEffect, useState } from "react";
import CreateThread from "./CreateThread.js";
import ThreadList from "./ThreadList";
import { connect } from "react-redux";
import Loading from "./loading/Loading";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1800));
}

const RenderThread = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    demoAsyncCall().then(() => setLoading(false));
  }, []);

  //check if loading
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  //check if user logged in or not.
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(RenderThread);
