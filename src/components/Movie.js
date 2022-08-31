import React from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Movie extends React.Component {
  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          {this.props.movieArray.map((item) => {
            return (

              <Col>

                <Card>
                  <Card.Img variant="top" src={item.image_url} alt="" />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      <p>average votes = {item.average_votes}</p>
                      <p>average votes = {item.average_votes}</p>
                      <p>total votes = {item.totalVotes}</p>
                      <p>popularity = {item.popularity}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Movie;
