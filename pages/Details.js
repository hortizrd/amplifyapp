import React, { Component } from "react";
import PropTypes from "prop-types";

const API_KEY = "f290d772";

export class Details extends Component {
  static propTypes = {
    match: PropTypes.shape,
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  };

  state = { movie: {} };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        console.log({ movie });
        this.setState({ movie });
      });
  }
  componentDidMount() {
    console.log(this.props);
    const { movieId } = this.props.match.params;
    this._fetchMovie({ id: movieId });
  }

  _goBack() {
    window.history.back();
  }
  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (

      
      <div className="container">
        
        <div className="row">
          <p></p>
          <div className="row no-gutters">
            <div className="col-md-2">
              <img src={Poster} className="card-img" alt="..." />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h2 className="text-muted">{Title}</h2>
                <p className="text-muted lead">{Plot}</p>
                <p>{Metascore}</p>
                <p className="card-text">
                  <small className="text-muted">{Actors}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <button onClick={this._goBack} className="btn btn-secondary">
          Regresar
        </button>
      </div>
    );
  }
}
