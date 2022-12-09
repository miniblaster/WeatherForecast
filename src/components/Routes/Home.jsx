import React, { useState, useEffect, useContext } from "react";
import Carousel from "../Carousel/Carousel";
import Weekly from "../Weekly/Weekly";
import Hourly from "../Hourly/Hourly";
import Loading from "../Loading/Loading";
import { CityContext } from "../../Context/CityContext";

const cities = [
  "F52083D2-841C-4E1A-A4C9-83827B07D8EE",
  "1B4DBE6A-EB69-4357-8BE8-1968DD9ECDF3",
  "0B66D5E5-039F-4951-A63A-2693464617CB",
  "54A0CBA3-F4F8-47B8-974C-7FCE641CAD2C",
];

const Home = () => {
  // const [data, setData] = useState([]);
  const context = useContext(CityContext)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if(context.data.length>0){
        return;
      }
      let newData = [];
      setLoading(true);
      let res;
      const a = await Promise.all (cities.map(async (item, index) => {
        res = await fetch(
          `https://all-the-weather.herokuapp.com/cities/${item}/forecast`
        );
        res = await res.json();
        newData.push(res);
      }));
      context.setData(newData);
      setLoading(false)
    };
    fetchData();
  }, []);
  return (
    <>{loading ? <Loading></Loading> :(
      <div className="home">
      <Carousel data={context.data}></Carousel>
      <Weekly data={context.data}></Weekly>
      <Hourly data={context.data}></Hourly>
      </div>
    ) }</>
  );
};

export default Home;
