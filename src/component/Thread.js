import React from "react";
import "../css/Thread.css";
import CommentList from "./CommentList";

//the props doesn't passed here?
const Thread = ({ item }) => {
  return (
    <div className="ui card">
      <div className="content">
        <img alt="" src={item.avatar} className="ui mini left floated image" />
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
      <CommentList comments={item.comments} />
    </div>
  );
};

export default Thread;
