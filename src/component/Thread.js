import React, { useState } from "react";
import "../css/Thread.css";
import CommentList from "./CommentList";

const Thread = ({ item }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  //action if the comment icon clicked, (use action redux later)
  const onCommentClick = (index) => {
    setActiveIndex(index);
  };

  // const renderedItems = item.comments.map((comment) => {
  //   return <div>comment: {comment}</div>;
  // });

  //todo: add reply icon untuk ngeliat siapa yang komen.

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
        <a
          href="#!"
          onClick={() => onCommentClick}
          style={{ paddingLeft: "25px" }}
        >
          <i className="reply icon"></i> {item.comments.length}
        </a>
      </div>

      <CommentList comments={item.comments} />
    </div>
  );
};

export default Thread;
