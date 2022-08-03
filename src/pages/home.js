import { Header, Dashboard, Footer, Page404 } from "../component/index";
import React, { useState, useEffect } from "react";
import getWeather from "../service/api";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoding, setIsLoding] = useState(false);

  //get data from api when component mount
  useEffect(() => {
    getWeather()
      .then((response) => {
        setData(response.data);
        setIsLoding((prev) => !prev);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {isLoding && (
        <>
          <Header />
          <Dashboard data={data} />
          <Footer />
        </>
      )}
    </>
  );
}
