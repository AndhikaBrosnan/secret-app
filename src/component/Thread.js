import React from "react";
import "../css/Thread.css";

//the props doesn't passed here?
const Thread = ({ item }) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{item.name}</div>
        <div className="meta">{item.date}</div>
        <div className="description">{item.text}</div>
      </div>
      <div className="extra content">
        <a href="/">
          <i className="like icon"></i>
          {item.likes}
        </a>
      </div>
    </div>
  );
};

export default Thread;
