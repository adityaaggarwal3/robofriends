import React from "react";
import Card from "../card/Card";

const CardContainer = (props) => {
  return (
    <div className="bg-light-purple pv1 bt bw2">
      {props.robots.map((robot, index) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            userName={robot.username}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
