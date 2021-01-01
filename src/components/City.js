import React from "react";
import { useHistory } from "react-router-dom";

// props -> cityName ,temp, color
function City({ cityName, temp, color }) {
  const history = useHistory();

  function handleClick() {
    history.push("/city?name=" + cityName);
  }

  return (
    <button
      className={"p-8 border-4 border-blue-300 rounded-md " + color}
      onClick={handleClick}
    >
      <div className="text-4xl font-light">{cityName}</div>
      <div className="flex  text-5xl">{temp}</div>
    </button>
  );
}

export default City;