// source: https://cssanimation.rocks/clocks/

import React from "react";
import "../assets/scss/apple_clock.scss";

export default class AppleClock extends React.Component {
  render() {
    var degrees = [{
        hand: 'hours',
        degree: (this.props.hour * 30) + (this.props.minute / 2)
    }, {
        hand: 'minutes',
        degree: (this.props.minute * 6)
    }, {
        hand: 'seconds',
        degree: (this.props.second * 6)
    }];
    for(var i=0; i<degrees.length; i++){
        degrees[i].style = {
            WebkitTransform: 'rotateZ(' + degrees[i].degree + 'deg)',
            transform: 'rotateZ(' + degrees[i].degree + 'deg)',
        }
    }

    return (
      <div id={this.props.myid} className="clock">
        <div className="demo-container clocks single local bounce">
          <article className="apple-clock simple show">
            <div className="hours-container" style={degrees[0].style}>
              <div className="hours"></div>
            </div>
            <div className="minutes-container" style={degrees[1].style}>
              <div className="minutes"></div>
            </div>
            <div className="seconds-container" style={degrees[2].style}>
              <div className="seconds"></div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
