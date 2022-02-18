import React, { useContext } from "react";
import Tours from "./Components/Tours";
import TourContext from "./Context/tour-context";
import Loading from "./Components/Loading";

const App = () => {
  const ctx = useContext(TourContext);
  return (
    <>
      {ctx.loading && <Loading />}
      <div className="app">
        {ctx.tours.length > 0 ? (
          <Tours onDelete={ctx.onDelete} />
        ) : (
          <div className="refresh">
            <h1>There's nothing left to show.</h1>
            <p>Refresh the page to see the tours again!</p>
            <button onClick={ctx.onFetchData}>Refresh ↺</button>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
