import React, { useContext, useState } from "react";
import { CityContext } from "../../Context/CityContext";
import ArrowLeftIcon from "../Icons/Common/ArrowLeftIcon";
import ArrowRightIcon from "../Icons/Common/ArrowRightIcon";
import TrashIcon from "../Icons/Common/TrashIcon";
import { useNavigate } from "react-router-dom";

import "./Carousel.scss";
const Carousel = ({ data }) => {
  const context = useContext(CityContext);
  const [trashColor, setTrashColor] = useState("#d82121");
  const navigate = useNavigate();
  const handleClick = (id) => () => {
    context.setSelected(id);
  };
  return (
    <div className="carousel">
      <div className="next-prev">
      <div className="carousel-caption">
        <div
          onClick={(e) => {
            if (context.selected !== 0)
              context.setSelected(context.selected - 1);
          }}
        >
          {" "}
          <ArrowLeftIcon color="#f2271c"></ArrowLeftIcon>
        </div>
        {data[context.selected]?.city?.name +", "+
          data[context.selected]?.city?.regionCode}
        <div
          onClick={(e) => {
            if (context.selected !== 3)
              context.setSelected(context.selected + 1);
          }}
        >
          <ArrowRightIcon color="#f2271c"></ArrowRightIcon>
        </div>
      </div>
      <div className="carousel-current">
        {[0, 1, 2, 3].map((item, index) => {
          return (
            <li
              className="dot"
              key={index}
              style={
                context.selected === item
                  ? { backgroundColor: "#f2271c" }
                  : { backgroundColor: "#f1f1f1" }
              }
              onClick={handleClick(item)}
            ></li>
          );
        })}
      </div>
      </div>
      <div className="carousel-content">
        <img src="dallas.png" alt="" />
        <div className="blur-area">
          <div className="content">
            <p className="temperature">
              {data[context.selected]?.forecast?.current?.temperature.toFixed(
                0
              )}
              &deg;
            </p>
            <p className="description">
              {data[context.selected]?.forecast?.current?.weather?.description}
              <br />
              Feels like{" "}
              {data[
                context.selected
              ]?.forecast?.current?.feelsLikeTemperature.toFixed(0)}
              &deg;
            </p>
          </div>
          <div className="radar">
            <div
              className="local"
              onClick={(e) => {
                navigate(`/${data[context.selected]?.city.id}/radar`);
              }}
            >
              Local Radar
            </div>
            <div
              className="trash"
              onMouseEnter={(e) => setTrashColor("#ffffff")}
              onMouseLeave={(e) => setTrashColor("#d82121")}
            >
              <TrashIcon color={trashColor}> </TrashIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
