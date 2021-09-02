import React from "react";
import "../css/Thread.css";

const CommentList = ({ comments }) => {
  const renderComment = comments.map((comment) => {
    return (
      <div key={comment}>
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
              <div className="text">{comment}</div>
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
  });

  return <div>{renderComment}</div>;
};

export default CommentList;
