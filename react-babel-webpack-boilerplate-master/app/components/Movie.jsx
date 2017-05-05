import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route,Link } from 'react-router-dom';


export default class Movie extends React.Component {

  constructor(props) {
    super(props);
       this.state = {
         movies:[],
         start:0,
         end:12,
         selected:'',
         filter:''
       };
  }
  changeFilter(filter) {
   this.setState({
     filter: filter
   });
 }
  isActive(value){
      console.log(this.state.selected);
     return 'waves-effect '+((value===this.state.selected) ?'active':'default');
   }

  handleClick(e){
  console.log(e);
  this.setState({selected  : e})

//  parent.className = 'active';
  }

componentWillMount() {
  const self = this;

  axios.get('https://raw.githubusercontent.com/itemsapi/itemsapi-example-data/master/movies.json')
  .then(function(response){
    self.setState({ movies: response.data });
  });

}
  render() {
    var moives = this.state.movies;
    var start = this.state.start;
    var end = this.state.end;
    return (
      <div className="container">
      <div className="row movie_column">
        {moives.slice(start, end).map((movie,index) =>
          <div key={index} className="col s12 m3">
            <div className="card">
              <div className="card  waves-effect card_setting">
              <div className="card-image ">
                <img src={movie.image}/>
                <span className="card-title">{movie.name}</span>
              </div>
              </div>
              <div className="card-content">
                <h5><i className="material-icons">info</i> Info</h5>
                <p>Director : {movie.director}</p>
                <p>Year : {movie.year}</p>
              </div>
              <div className="card-action">
            <label className="ratingLabel"><i className="material-icons">star</i><h6>Rating {movie.rating}</h6></label>
              </div>
            </div>
          </div>
        )}
        </div>
        <BrowserRouter>

        </BrowserRouter>
        <ul className="pagination">

          <li><Link to="/partA" activeClassName="active">Part A</Link></li>
      <li><Link to="/partB" activeClassName="active">Part B</Link></li>
      <li><Link to="/partC" activeClassName="active">Part C</Link></li>
      <li><Link to="/partD" activeClassName="active">Part D</Link></li>

        </ul>
      </div>

    );
  }
}
