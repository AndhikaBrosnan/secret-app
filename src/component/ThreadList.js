import React from "react";
import Thread from "./Thread";

const ThreadList = ({ list }) => {
  const renderList = list.map((item, index) => {
    return (
      <div key={index} style={{ marginBottom: "5px" }}>
        <Thread threadIndex={index} item={item} />
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
