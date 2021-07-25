import React from "react";
import Thread from "./Thread";

const ThreadList = ({ list }) => {
  const renderList = list.threads.map((item, index) => {
    return (
      <div key={index}>
        <Thread item={item} />
      </div>
    );
  });
  return (
    <div role="list" className="list">
      {renderList}
    </div>
  );
};

export default ThreadList;
