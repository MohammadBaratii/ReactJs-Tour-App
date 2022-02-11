import React, { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(fetchTours, []);

  const handleDelete = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <>
      {loading && <Loading />}
      <div className="app">
        {tours.length > 0 ? (
          <Tours tours={tours} onDelete={handleDelete} />
        ) : (
          <button className="refresh" onClick={fetchTours}>
            refresh ↺
          </button>
        )}
      </div>
    </>
  );
};

export default App;
