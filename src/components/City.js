import React from "react";

// props
function City({cityName, temp, color}) {
  return (
    <div className={"flex flex-row p-8 justify-between items-center " + color}>
        <div className="text-2xl" className="font-semibold">{cityName}</div>
        <div className="text-5xl">{temp}</div>
    </div>
  );
}

export default City;