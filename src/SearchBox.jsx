import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {

  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "6c16d74c60d9ad540084996c8fb0b012"; // apni key daalo

  let getWeatherInfo = async () => {

    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let jsonResponse = await response.json();

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    return result;
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();

    let newInfo = await getWeatherInfo();

    updateInfo(newInfo);

    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <TextField
        label="City Name"
        variant="outlined"
        value={city}
        onChange={handleChange}
        required
      />

      <br /><br />

      <Button variant="contained" type="submit">
        SEARCH
      </Button>

    </form>
  );
}