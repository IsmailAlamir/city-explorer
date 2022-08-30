import Card from 'react-bootstrap/Card';
import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';


class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getMovieArray:[]
        }
    }


    getMovie = async (event) => {
        event.preventDefault();
        var mURL=`${process.env.REACT_APP_URL}movies?searchQuery=${this.props.cityName}`
        try {
            let newMovie = await axios.get(mURL);
            this.setState({
                getMovieArray: newMovie.data

            });
        } catch {
            this.setState({
                erorrFlag: true,
            });
        }
    };


    render() {
        return (
            <div style={{ padding: '30px', justifyContent: "center" }}>
    <Button variant="danger" type="submit" onClick={this.getMovie}>
        movie
    </Button>
    <Card>
        <Card.Body>
            <Card.Text>
            {this.state.getMovieArray.map(item =>{
        return(
          <div>
            <img src={item.image_url} alt=''/>
            <p>title = {item.title} </p>
            <p>average votes = {item.average_votes}</p>
            <p>average votes = {item.average_votes}</p>
            <p>total votes = {item.totalVotes}</p>
            <p>popularity = {item.popularity}</p>

          </div>
        )
      })
      }
            </Card.Text>
        </Card.Body>
    </Card>
</div >
               
        );
    }
}
export default Movies;


