import React, { useEffect, useState } from "react";
import Thread from "./Thread";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions";

const ThreadList = () => {
  //
  const dispatch = useDispatch();
  // state of the likes
  const [activeLike, setActiveLikes] = useState([]);

  // gantinya mapStatetoProps
  const posts = useSelector((state) => state.posts);

  const threadCallback = (index) => {
    setActiveLikes(index, ...activeLike);
  };

  const fetchData = async () => {
    const response = await fetchPosts();
    console.log(response);

    dispatch({ type: "FETCH_POSTS", payload: response });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("post in threadlist", posts);
  return (
    <div role="list" className="list">
      {posts.map((item, index) => (
        <div key={index} style={{ marginBottom: "5px" }}>
          <Thread
            threadIndex={index}
            item={item}
            threadCallback={threadCallback}
          />
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
