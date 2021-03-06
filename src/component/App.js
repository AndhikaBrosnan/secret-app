import React from "react";
import ThreadList from "./ThreadList";
import CreateThread from "./CreateThread.js";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts };
  }

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

    // set state to manipulate the lists
    this.setState({
      posts: [newPost, ...this.state.posts],
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <CreateThread onSubmit={this.submit} />
        <ThreadList list={this.state.posts} />
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
