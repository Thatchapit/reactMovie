import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <header className="z-depth-4 grey darken-4">
      <div className="container">
        <nav className="editHeader">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo"><i className="material-icons">theaters</i>Theaters</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    );
  }
}
