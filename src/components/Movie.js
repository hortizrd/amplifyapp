import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Title } from "./Title";
import { Link } from "react-router-dom";

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    plot: PropTypes.string,
  };

  render() {
    const { id, poster, title, year, plot } = this.props;
    return (
      <Link to={`/Details/${id}`} className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <img src={poster} className="card-img" alt="..." />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h2 className="text-muted">{title}</h2>
              <p className="text-muted lead">{plot}</p>
              <p className="card-text">
                <small className="text-muted">{year}</small>
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
