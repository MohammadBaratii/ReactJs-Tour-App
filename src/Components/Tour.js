import React, { useContext, useState } from "react";
import TourContext from "../Context/tour-context";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  const toursCtx = useContext(TourContext);

  const handleDelete = () => {
    toursCtx.onDelete(props.tour.id);
  };

  return (
    <div className="tour">
      <div className="tour__image-box">
        <img
          className="tour__image"
          src={props.tour.image}
          alt={props.tour.name}
        />
      </div>
      <footer className="tour__footer">
        <div className="tour__title">
          <h1 className="tour__name">{props.tour.name}</h1>
          <p className="tour__price">${props.tour.price}</p>
        </div>
        <p className="tour__info">
          {readMore
            ? props.tour.info
            : `${props.tour.info.substring(0, 200)}...`}
          <button
            className="tour__read-more"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "read less" : "read more"}
          </button>
        </p>

        <button className="tour__delete" onClick={handleDelete}>
          not interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
