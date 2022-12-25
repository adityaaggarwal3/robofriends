import React from "react";

const Scroll = (props) => {
  return (
    <div
      className="pb4 mb1 scroll"
      style={{ overflowY: "scroll", height: "650px", margin: "0" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
