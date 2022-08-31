import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getWeatherArray: [],
    };
  }

  getWeather = async (event) => {
    event.preventDefault();
    var wURL = `${process.env.REACT_APP_URL}weather?lat=${this.props.lat}&lon=${this.props.lon}`;
    try {
      let newWeather = await axios.get(wURL);
      this.setState({
        getWeatherArray: newWeather.data,
      });
    } catch {
      this.setState({
        erorrFlag: true,
      });
    }
  };

  render() {
    return (
      <div style={{ padding: "30px", justifyContent: "center" }}>
        <Button variant="danger" type="submit" onClick={this.getWeather}
        style={{ marginBottom: "30px" }}>
          weather
        </Button>
        <WeatherDay weatherArray={this.state.getWeatherArray}></WeatherDay>
      </div>
    );
  }
}
export default Weather;
