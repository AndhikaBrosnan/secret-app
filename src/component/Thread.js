import React, { useState } from "react";
import "../css/Thread.css";
import CommentList from "./CommentList";
import { connect } from "react-redux";
import { unlikePost, likePost } from "../actions";

const Thread = ({ unlikePost, likePost, likes, item, threadIndex }) => {
  const [activeComment, setactiveComment] = useState(null);

  const activeLike = likes.includes(item.id) ? "active" : "";

  const onCommentClick = (index) => {
    setactiveComment(index);
  };

  const RenderComments = () => {
    return activeComment === threadIndex ? (
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
        <a
          href="#!"
          onClick={
            likes.includes(threadIndex)
              ? () => unlikePost(threadIndex)
              : () => likePost(threadIndex)
          }
        >
          <i className={`like icon ${activeLike}`}></i>
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

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
  };
};

export default connect(mapStateToProps, { unlikePost, likePost })(Thread);
