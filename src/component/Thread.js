import React, { useState } from "react";
import "../css/Thread.css";
import CommentList from "./CommentList";
import { connect } from "react-redux";
import { unlikePost, likePost } from "../redux/action/like";
import moment from "moment";

const Thread = ({
  unlikePost,
  likePost,
  likes,
  threadLike,
  item,
  threadIndex,
}) => {
  const [activeComment, setactiveComment] = useState(null);

  const activeLike = threadLike.includes(item.id) ? "active" : "";

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

  // count likes on this thread
  // const amtOfLikes = threadLike.includes(item.id) ? likes.length : null;

  return (
    <div className="ui card">
      <div className="content">
        <img alt="" src={item.avatar} className="ui mini left floated image" />
        <div className="header">{item.name}</div>
        <div className="meta">
          {moment(item.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}{" "}
        </div>
        <div className="description">{item.text}</div>
      </div>
      <div className="extra content">
        <a
          href="#!"
          onClick={
            true ? () => unlikePost(threadIndex) : () => likePost(threadIndex)
          }
        >
          <i className={`like icon ${activeLike}`}></i>
          {/* count likes below */}
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
    auth: state.auth,
    likes: state.likes,
  };
};

export default connect(mapStateToProps, { unlikePost, likePost })(Thread);
