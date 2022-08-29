import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';




class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lat: '',
            lon: '',
            img: '',
            imgFlag: false,
            errFlag: false,
            errMsg: 'Oops! Something went wrong...',
            nURL:'',
            dis: "",
            date: ""
      

            
        }
    }

    getWeather = async (event) => {
        event.preventDefault();
        // let newURL = `${process.env.REACT_APP_URL}weather?lat=${this.state.lat}&lon=${this.state.lon}`
    
        try {
          let newWeather = await axios.get(this.state.nURL);
          this.setState({
            dis: newWeather.data.description,
            date :newWeather.data.date
          });
        } catch { this.setState({
          erorrFlag: true,
        });}
      };
    
    getLocation = async (e) => {
        e.preventDefault();
        const cityName = e.target.city.value;
        const key = 'pk.ccd8526052553a493956a0f705c82593';
        const URL = `https://eu1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`
        // const newURL = `${process.env.REACT_APP_newURL}weather?lat=${lat},lon=${lon}`;



        try {
            let resResult = await axios.get(URL);
            this.setState({
                name: resResult.data[0].display_name,
                lat: resResult.data[0].lat,
                lon: resResult.data[0].lon,
                imgFlag: true,
                img: `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${resResult.data[0].lat},${resResult.data[0].lon}`,
                errFlag: false,
                nURL: `${process.env.REACT_APP_URL}weather?lat=${resResult.data[0].lat}&lon=${resResult.data[0].lon}`,



            })

        } catch (error) {
            this.setState({
                imgFlag: false,
                errFlag: true

            });

        }

    }
    render() {
        return (



            <div style={{ margin: 'auto', width: '600px', justifyContent: "center", padding: '30px' }}>
                <Form onSubmit={this.getLocation}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="city" placeholder="Enter city" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Explore!
                    </Button>
                    <button type="button" onClick={this.getWeather}>
          weather 
        </button>

                </Form>
                {this.state.imgFlag &&
                    <div style={{ padding: '30px', justifyContent: "center" }}>
                        <Card>
                            {this.state.imgFlag && <Card.Img variant="top" src={this.state.img} />}
                            <Card.Body>
                                <Card.Text>

                                    <h4>Display Name : {this.state.name}
                                    </h4>
                                    <h1>weather : {this.state.dis}</h1>
                                    <h1>Date : {this.state.date}</h1>

                                    <h6>latitude :{this.state.lat}</h6>
                                    <h6>longitude:{this.state.lon}</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                }
                {this.state.errFlag &&
                    <div style={{ padding: '30px', justifyContent: "center" }}>
                        <Card>
                            {this.state.imgFlag && <Card.Img variant="top" src={this.state.img} />}
                            <Card.Body>
                                <Card.Text>
                                    <h3>{this.state.errMsg}</h3>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                }

            </div>
        );
    }
}
export default Main;
