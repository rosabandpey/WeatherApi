import React from "react";
import ForcastWeather from "../Forcast/ForcastWeather";

function Dashboard({ data }) {
  return (
    <>
      <ForcastWeather data={data} />
    </>
  );
}
export { Dashboard };
