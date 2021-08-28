import React from "react";
import ThreadList from "./ThreadList";
import CreateThread from "./CreateThread.js";
import { connect } from "react-redux";

class App extends React.Component {

  // Submit provided by redux form! 
  // CURRENTLY unused
  submit = (values) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    let newPost = {
      avatar: "https://semantic-ui.com/images/avatar2/large/kristy.png",
      name: "Me",
      text: values.postThread,
      likes: 0,
      date: today.toDateString(),
      comments: [],
    };

    return {
      posts: [...this.props.posts.threads, newPost],
    };
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <CreateThread onSubmit={this.submit} />
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
