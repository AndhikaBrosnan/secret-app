import React, { useState } from "react";
import Thread from "./Thread";
import { connect } from "react-redux";

const ThreadList = ({ posts }) => {
  console.log(posts);
  // state of the likes
  const [activeLike, setActiveLikes] = useState([]);

  const threadCallback = (index) => {
    setActiveLikes(index, ...activeLike);
  };

  const renderList = posts[0].map((item, index) => {
    return (
      <div key={index} style={{ marginBottom: "5px" }}>
        <Thread
          threadIndex={index}
          item={item}
          threadCallback={threadCallback}
        />
      </div>
    );
  });

  return (
    <div role="list" className="list">
      {renderList}
    </div>
  );
};

const mapStatetoProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStatetoProps)(ThreadList);
