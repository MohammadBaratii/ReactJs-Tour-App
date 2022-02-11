import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  return (
    <div className="tours">
      {props.tours.map((tour) => {
        return <Tour tour={tour} onDelete={props.onDelete} key={tour.id} />;
      })}
    </div>
  );
};

export default Tours;
