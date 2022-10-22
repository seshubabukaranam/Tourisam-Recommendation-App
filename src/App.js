import "./styles.css";
import { useState } from "react";
const btnStyle = {
  cursor: "pointer",
  background: "#E6C8D8",
  color: "black",
  borderRadius: "0.5rem",
  padding: "0.5rem  1rem",
  border: "1px solid black",
  margin: "1rem 0.3rem",
};
var cityDb = {
  Delhi: [
    { place: "Attraction Spot:Tajmahal", rating: "4.5/5" },
    { place: "Attraction Spot:Red Fort", rating: "4/5" },
  ],
  Mumbai: [
    { place: "Attraction Spot:Bandra-Worli Sea Link", rating: "4/5" },
    { place: "Attraction Spot:Gate Way of India", rating: "5/5" },
  ],
  Hyderabad: [
    { place: "Attraction Spot:Ramoji Film City", rating: "5/5" },
    { place: "Attraction Spot:Golkonda", rating: "5/5" },
  ],
  Bengaluru: [
    { place: "Attraction Spot:Ikon Temple", rating: "3.5/5" },
    { place: "Attraction Spot:cobbon Park", rating: "5/5" },
  ],
  Chennai: [
    { place: "Attraction Spot:Thomas Mount National Shrine", rating: "5/5" },
    { place: "Attraction Spot:Chennai Rail Measuem", rating: "4.5/5" },
  ],
};
export default function App() {
  const [selectedCityName, setCityName] = useState("Chennai");
  function cityClickHandler(cityName) {
    setCityName(cityName);
  }
  return (
    <div className="App">
      <h2>🗼Good Tourisam Spots In India</h2>
      <h4>Checkout my favorite tourisam spots.Select a city to get started</h4>
      {
        <div>
          {Object.keys(cityDb).map((city) => (
            <button style={btnStyle} onClick={() => cityClickHandler(city)}>
              {city}
            </button>
          ))}
        </div>
      }
      <hr></hr>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {cityDb[selectedCityName].map((city) => (
            <li
              key={city.place}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid grey",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              <div style={{ fontSize: "larger" }}>{city.place}</div>
              <div style={{ fontSize: "smaller" }}>{city.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
