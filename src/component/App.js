import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/action";
import RenderThread from "./RenderThread";

class App extends React.Component {
  render() {
    console.log("[APP]props isSignedIn: ", this.props);

    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Navbar />
        {RenderThread(this.props)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
