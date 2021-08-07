import React, { useState } from "react";
import "../css/Thread.css";
import CommentList from "./CommentList";

const Thread = ({ item, threadIndex }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onCommentClick = (index) => {
    setActiveIndex(index);
  };

  const RenderComments = () => {
    return activeIndex === threadIndex ? (
      <CommentList comments={item.comments} />
    ) : (
      <div></div>
    );
  };

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
          onClick={() => onCommentClick(threadIndex)}
          style={{ paddingLeft: "25px" }}
        >
          <i className="reply icon"></i> {item.comments.length}
        </a>
      </div>

      <RenderComments />
    </div>
  );
};

export default Thread;
