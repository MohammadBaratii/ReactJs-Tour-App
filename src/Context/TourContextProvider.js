import react, { useEffect, useState } from "react";
import TourContext from "./tour-context";

const url = "https://course-api.com/react-tours-project";

const TourContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("We've got an error,\nPlease try again later.");
    }
  };

  useEffect(fetchTours, []);

  const handleDelete = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <TourContext.Provider
      value={{
        tours: tours,
        loading: loading,
        onDelete: handleDelete,
        onFetchData: fetchTours,
      }}
    >
      {props.children}
    </TourContext.Provider>
  );
};

export default TourContextProvider;
