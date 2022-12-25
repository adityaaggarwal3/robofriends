import React from "react";

const Card = (props) => {
  return (
    <div className="card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`http://robohash.org/${props.userName}?200x200`} alt="" />
      <h2>
        {props.id}: {props.name}
      </h2>
      <h3>"{props.userName}"</h3>
      <h4>{props.email}</h4>
    </div>
  );
};

export default Card;
