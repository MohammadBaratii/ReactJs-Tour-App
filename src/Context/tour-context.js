import React from "react";

const TourContext = React.createContext({
  loading: false,
  tours: [],
  onDelete: (id) => {},
  onFetchData: () => {},
});

export default TourContext;
