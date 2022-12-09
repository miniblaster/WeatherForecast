import React, { useContext, useState,useEffect } from "react";
import { CityContext } from "../../Context/CityContext";
import Icon from "../Icons";
import "./Weekly.scss";

const days = [
  "Mon",
  "Tues",
  "Wednes",
  "Thurs",
  "Fri",
  "Satur",
  "Sun",
];

const Weekly = ({ data }) => {
  const context = useContext(CityContext);
  const [selectedDay, setSelectedDay] = useState(0);
  const [count, setCount] = useState(Math.floor(window.innerWidth/90))
  useEffect(()=>{
    // setCount(Math.floor(window.innerWidth/110))  
    setSelectedDay(0)
  },[context.selected])
  return (
    <div className="weekly">
      <div className="content">
        <div className="title">Weekly Forecast</div>
        <div className="week">
          {data[context.selected]?.forecast?.daily.map((item, index) => {
            if (index > count-1 || index>6) return;
            let today = new Date();
            let day = today.getDay() - 1;
            days[day] = "Today";
            return (
              <div
              key={index}
                className="day"
                style={
                  selectedDay === index
                    ? { backgroundColor: "#f2f2f2" }
                    : { backgroundColor: "#ffffff" }
                }
                onClick={(e) => setSelectedDay(index)}
              >
                <div className="day-title">{days[(index + day) % 7]}</div>
                <div className="weather-icon">
                  <Icon name={item.weather.description}></Icon>
                </div>
                <div className="temp">
                  {item?.temperatures?.high.toFixed(0)}&deg;|{item?.temperatures?.low.toFixed(0)}&deg;
                </div>
              </div>
            );
          })}
        </div>
        <div className="sunset">
          <div className="sun">
          <div className="sun-icon">
            <Icon name={"sun"} color={"#fff206"}></Icon>
          </div>
          <div className="rise-set">
            <div>Rise</div>
            <div>Set</div>
          </div>
          <div className="rs-time">
            <div>
              {new Date(
                data[context.selected]?.forecast?.daily[selectedDay]?.sunrise
              ).getUTCHours() +
                ":" +
                new Date(
                  data[context.selected]?.forecast?.daily[selectedDay]?.sunrise
                ).getUTCMinutes() +
                " am"}
            </div>
            <div>
              {new Date(
                data[context.selected]?.forecast?.daily[selectedDay]?.sunset
              ).getUTCHours() +
                ":" +
                new Date(
                  data[context.selected]?.forecast?.daily[selectedDay]?.sunset
                ).getUTCMinutes() +
                " pm"}
            </div>
          </div>
          </div>
         <div className="moon">
         <div className="moon-icon">
            <Icon name="moon" color={'#585858'}></Icon>
          </div>
          <div className="rise-set">
            <div>Rise</div>
            <div>Set</div>
          </div>
          <div className="rs-time">
            <div>
              {new Date(
                data[context.selected]?.forecast?.daily[selectedDay]?.moonrise
              ).getUTCHours() +
                ":" +
                new Date(
                  data[context.selected]?.forecast?.daily[selectedDay]?.moonrise
                ).getUTCMinutes() +
                " am"}
            </div>
            <div>
              {new Date(
                data[context.selected]?.forecast?.daily[selectedDay]?.moonset
              ).getUTCHours() +
                ":" +
                new Date(
                  data[context.selected]?.forecast?.daily[selectedDay]?.moonset
                ).getUTCMinutes() +
                " pm"}
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Weekly;
