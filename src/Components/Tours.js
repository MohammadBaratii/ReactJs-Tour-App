import React, { useContext } from "react";
import TourContext from "../Context/tour-context";
import Tour from "./Tour";

const Tours = () => {
  const toursCtx = useContext(TourContext);

  return (
    <div className="tours">
      {toursCtx.tours.map((tour) => {
        return <Tour tour={tour} key={tour.id} />;
      })}
    </div>
  );
};

export default Tours;
