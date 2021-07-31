import React from "react";
import ThreadList from "./ThreadList";
import CreateThread from "./CreateThread.js";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <CreateThread />
        <ThreadList list={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(App);
