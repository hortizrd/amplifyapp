import React,{Component} from 'react'

import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MoviesList } from "../components/MoviesList";


export class Home extends Component{
   

    state = { usedSearch: false, results: [] };
    _handleResults = (results) => {
      this.setState({ results, usedSearch: true });
    };
    _renderResults() {
        return this.state.results.length === 0 ? (
          <p>Not Found</p>
        ) : (
          <MoviesList movies={this.state.results} />
        );
      }
    render(){
        return(
            <header className="App-header">
          <Title>Search Movies</Title>
          <div className="container">
           
            <SearchForm onResults={this._handleResults} />
            <div>
              {this.state.usedSearch ? (
                this._renderResults()
              ) : (
                <small>Use the form to search a movie</small>
              )}
            </div>
          </div>
        </header>
        )
    }
}