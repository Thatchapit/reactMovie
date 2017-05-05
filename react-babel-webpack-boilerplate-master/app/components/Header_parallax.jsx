import React from 'react';
export default class Header_parallax extends React.Component {


  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
      <div className="parallax-container">

          <div className="row container parallax_warp">
            <h2 className="header_text otto">Hello React  <i className="material-icons icon-size">sentiment_very_satisfied</i>  </h2>

          </div>
          <div className="parallax"><img src="http://i1233.photobucket.com/albums/ff399/invinciblekulu/Web%20Background/Colorful-abstract-background.jpg"/></div>
        </div>

      </div>

    );
  }
}
