import React, { useState } from "react";
import Thread from "./Thread";

const ThreadList = ({ list }) => {
  // state of the likes
  const [activeLike, setActiveLikes] = useState([]);

  const threadCallback = (index) => {
    setActiveLikes(index, ...activeLike);
  };

  console.log("(THREADLIST) props list: ", list[0]);

  const renderList =
    list[0] !== []
      ? list.map((item, index) => {
          return (
            <div key={index} style={{ marginBottom: "5px" }}>
              <Thread
                threadIndex={index}
                item={item}
                threadCallback={threadCallback}
              />
            </div>
          );
        })
      : "";

  return (
    <div role="list" className="list">
      {renderList}
    </div>
  );
};

export default ThreadList;
