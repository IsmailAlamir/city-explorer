import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Movie from './Movie';

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
            
      <div style={{ padding: "30px", justifyContent: "center" }}>
    <Button variant="danger" type="submit" onClick={this.getMovie} style={{ marginBottom: "30px" }}>
        movie
    </Button>
     <Movie movieArray={this.state.getMovieArray} /> 
</div >
               
        );
    }
}
export default Movies;