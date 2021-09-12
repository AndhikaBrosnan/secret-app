import React from "react";
import ThreadList from "./ThreadList";
import CreateThread from "./CreateThread.js";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts };
  }

  componentDidMount() {
    // this.props.fetchPosts();
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <CreateThread />
        <ThreadList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
