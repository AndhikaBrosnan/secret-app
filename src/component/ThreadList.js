import React, { useEffect, useState } from "react";
import Thread from "./Thread";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/action/thread";
import { connect } from "react-redux";
import { fetchLikeData } from "../redux/action/like";

const ThreadList = ({ auth, likes }) => {
  const dispatch = useDispatch();
  // state of the likes
  const [activeLike, setActiveLike] = useState([]);

  // gantinya mapStatetoProps
  const posts = useSelector((state) => state.posts);

  const threadCallback = (index) => {
    setActiveLike(index, ...activeLike);
  };

  useEffect(() => {
    fetchData(dispatch); // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchLikeData(dispatch, auth.profile.getImageUrl()); // eslint-disable-next-line
  }, []);

  // I'm not using useState hooks, it errors too many to render :(
  // Still need to figure this tho
  const currentAccountLikes = [];

  // compare auth & likes avatar & return likedId
  for (var key in likes) {
    var obj = likes[key];
    if (obj["threadId"] === auth.profile.getImageUrl()) {
      // setActiveLikes([obj["likedId"], ...activeLike]); //this doesn't work here
      currentAccountLikes.push(obj["likedId"]);
    }
  }

  return (
    <div role="list" className="list">
      {posts.map((item, index) => (
        <div key={index} style={{ marginBottom: "5px" }}>
          <Thread
            threadIndex={index}
            item={item}
            threadLike={currentAccountLikes} //threadLike is empty
            threadCallback={threadCallback}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ThreadList);
