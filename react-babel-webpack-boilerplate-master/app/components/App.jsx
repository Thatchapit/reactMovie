import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import HeaderParallax from './Header_parallax';
import Movie from './Movie';
require('./App.css');

export default class App extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <HeaderParallax/>
        <Movie/>
        <h1>Hello World TEST</h1>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/Contact">Contact</Link>
          {this.props.children}
      </div>
    );
  }
}
