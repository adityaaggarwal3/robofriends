import React from "react";
import Card from "../card/Card";

const CardContainer = (props) => {
  return (
    <div>
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
