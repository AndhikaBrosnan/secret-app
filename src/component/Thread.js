import React, { useState } from "react";
import "../css/Thread.css";
import CommentList from "./CommentList";
import { connect, useDispatch } from "react-redux";
import { postLike } from "../redux/action";
import moment from "moment";

const Thread = ({ likes, threadLike, item, auth, threadIndex }) => {
  const dispatch = useDispatch();

  const [activeComment, setactiveComment] = useState(null);

  const activeLike = threadLike.includes(item.id) ? "active" : "";

  const onCommentClick = (index) => {
    setactiveComment(index);
  };

  const handleLike = (itemId, auth) => {
    postLike(dispatch, itemId, auth);
  };

  const RenderComments = () => {
    return activeComment === threadIndex ? (
      <CommentList comments={item.comments} />
    ) : (
      <div></div>
    );
  };

  // # count likes on this thread
  var countLike = 0;
  for (var i in likes) {
    if (likes[i].likedId === item.id) {
      countLike++;
    }
  }

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
        <i
          onClick={
            activeLike !== "active" ? () => handleLike(item.id, auth) : null
          }
        >
          <i className={`like icon ${activeLike}`}></i>
          {/* count likes below */}
          {/* {item.likes} */}
          {countLike}
        </i>
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

export default connect(mapStateToProps, { postLike })(Thread);
