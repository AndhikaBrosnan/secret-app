import React from "react";
import ThreadList from "./ThreadList";
import Navbar from "./Navbar";
import CreateThread from "./CreateThread.js";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/action";

class App extends React.Component {
  render() {
    const renderThread = this.props.auth.isSignedIn ? (
      <div>
        <CreateThread />
        <ThreadList />
      </div>
    ) : (
      <div>
        <div className="ui warning message">
          {/* <i className="close icon"></i> */}
          <div className="header">You need to sign in.</div>
          Don't worry, you can go anonymous when you post a thread{" "}
          <g style={{ fontSize: 25 }}>😝</g>
        </div>
      </div>
    );

    console.log("[APP]props isSignedIn: ", this.props);
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Navbar />
        {renderThread}
        {/* <CreateThread />
        <ThreadList /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
