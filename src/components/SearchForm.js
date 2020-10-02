import React, * as react from "react";

   const API_KEY ='f290d772'
export class SearchForm extends react.Component {
         state = {
           inputMovie: "",
         };

         _hola = (e) => {
           alert(this.state.inputMovie);
         };
         _handleChange = (e) => {
           this.setState({ inputMovie: e.target.value });
         };
         _handleSubmit = (e) => {
           e.preventDefault();
          // alert(this.state.inputMovie);

          const{inputMovie} = this.state

          fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
          .then(res => res.json())
          .then(results =>{
              
              const {Search =[],totalResults = 0} = results
             console.log({Search,totalResults})
              this.props.onResults(Search)
          })
         };

         render() {
           return (
             <div className="container">
               <form onSubmit={this._handleSubmit}>
                 <div className="row">
                   <div className="col-sm">
                     <div className="input-group mb-3">
                       <input
                         type="text"
                         onChange={this._handleChange}
                         className="form-control"
                         placeholder="Buscar peliculas"
                         aria-label="Recipient's username"
                         aria-describedby="button-addon2"
                       />
                       <div className="input-group-append">
                         <button className="btn btn-outline-secondary">
                           Buscar
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
               </form>
             </div>
           );
         }
       }
