import React from "react";
import "../css/Thread.css";

const CommentList = ({ comments }) => {
  console.log(comments);
  //map comments here, and render below. #1stAugust2021

  return (
    <div>
      <div
        className="ui comments"
        style={{ margin: "15px", marginLeft: "40px" }}
      >
        <div className="vertical"></div>
        <div className="comment">
          <div className="content">
            <a href="/" className="author">
              Madam Gossip
            </a>
            <div className="metadata">
              <div>Just now</div>
            </div>
            <div className="text">Elliot you are always so right :)</div>
            <div className="actions">
              <a href="/" className="">
                Reply
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
