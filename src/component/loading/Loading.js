import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="ui segment">
        <div className="ui active transition visible inverted dimmer">
          <div className="content">
            <div className="ui massive text loader">Loading</div>
          </div>
        </div>
        <img
          alt=""
          src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
          className="ui image"
        />
        <img
          alt=""
          src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
          className="ui image"
        />
        <img
          alt=""
          src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
          className="ui image"
        />
      </div>
    </div>
  );
};

export default Loading;
