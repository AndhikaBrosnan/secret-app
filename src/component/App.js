import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/action";
import RenderThread from "./RenderThread";
import { resetData } from "../redux/action/thread";

class App extends React.Component {
  componentWillUnmount() {
    console.log("props on will mount: ", this.props);
    // reset action here
    this.props.resetData();
  }

  render() {
    console.log("[APP]props isSignedIn: ", this.props);

    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Navbar />
        <RenderThread />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts, resetData })(App);
