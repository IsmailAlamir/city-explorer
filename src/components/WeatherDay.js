import React from "react";
import Card from "react-bootstrap/Card";

class WeatherDay extends React.Component {
  render() {
    return (
      <div>{this.props.weatherArray.map((item) => {
              return (
        <Card
          className="mb-3"
          key="secondary"
          bg="secondary"
          text="white"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            
                <>
                  <Card.Title>date : {item.valid_date}</Card.Title>

                  <Card.Text>weather : {item.description}</Card.Text>
                </>
          
          </Card.Body>
        </Card>    );
            })}
      </div>
    );
  }
}
export default WeatherDay;