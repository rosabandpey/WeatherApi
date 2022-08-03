import React from "react";
import { WEEKDAY } from "../../tools/constants";
import {
  ForcastUL,
  ForcastWeatherItem,
  ForcastDiv,
  ForcastH1,
  ForcastH2,
  ForcastH3,
  ForcastSpan,
  ForcastI,
} from "./forcatsCss";

export default function ForcastWeather({ data }) {

  
  //using Date func inorder to get day of week
  const d = new Date(data.location.localtime);
  let day = WEEKDAY[d.getDay()];

  return (
    <ForcastWeatherItem>
      <ForcastDiv className="container">
        <ForcastDiv className="weather-side">
          <ForcastDiv className="weather-gradient"></ForcastDiv>
          <ForcastDiv className="date-container">
            <ForcastH2 className="date-dayname">{day}</ForcastH2>
            <ForcastSpan className="date-day">
              {data.location.localtime}
            </ForcastSpan>
            <ForcastI
              className="location-icon"
              data-feather="map-pin"
            ></ForcastI>
            <ForcastSpan className="location">{data.location.name}</ForcastSpan>
          </ForcastDiv>
          <ForcastDiv className="weather-container">
            <ForcastI className="weather-icon" data-feather="sun"></ForcastI>
            <ForcastH1 className="weather-temp">
              {data.current.temperature}°C
            </ForcastH1>
            <ForcastH3 className="weather-desc">
              {data.current.weather_descriptions}
            </ForcastH3>
          </ForcastDiv>
        </ForcastDiv>
        <ForcastDiv className="info-side">
          <ForcastDiv className="today-info-container">
            <ForcastDiv className="today-info">
              <ForcastDiv className="precipitation">
                <ForcastSpan className="title">Visibility</ForcastSpan>
                <ForcastSpan className="value">
                  {data.current.visibility}
                </ForcastSpan>
                <ForcastDiv className="clear"></ForcastDiv>
              </ForcastDiv>
              <ForcastDiv className="humidity">
                <ForcastSpan className="title">HUMIDITY</ForcastSpan>
                <ForcastSpan className="value">
                  {data.current.humidity}
                </ForcastSpan>
                <ForcastDiv className="clear"></ForcastDiv>
              </ForcastDiv>
              <ForcastDiv className="wind">
                <ForcastSpan className="title">WIND</ForcastSpan>
                <ForcastSpan className="value">
                  {data.current.wind_speed}
                </ForcastSpan>
              </ForcastDiv>
            </ForcastDiv>
          </ForcastDiv>
          <ForcastDiv className="week-container">
            <ForcastUL className="week-list">
              <li>
                <ForcastI
                  className="day-icon"
                  data-feather="cloud-rain"
                ></ForcastI>
                <ForcastSpan className="day-name">{day}</ForcastSpan>
                <ForcastSpan className="day-temp">
                  {data.current.temperature}°C
                </ForcastSpan>
              </li>
            </ForcastUL>
          </ForcastDiv>
        </ForcastDiv>
      </ForcastDiv>
    </ForcastWeatherItem>
  );
}
