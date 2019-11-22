// source: https://codepen.io/bsmith/pen/drElg

import React from "react";
import "../assets/scss/simple_clock.scss";

export default class SimpleClock extends React.Component {
  render() {
    const h1 = "n" + Math.floor(this.props.hour / 10);
    const h2 = "n" + (this.props.hour % 10);
    const m1 = "n" + Math.floor(this.props.minute / 10);
    const m2 = "n" + (this.props.minute % 10);
    const s1 = "n" + Math.floor(this.props.second/ 10);
    const s2 = "n" + (this.props.second % 10);
    return (
      <div id={this.props.myid} className="clock">
        <div id="clock" className={this.props.theme}>
          <div className="display">
            <div className="weekdays"></div>
            <div className="ampm"></div>
            <div className="alarm"></div>

            <div className="digits">
              <div className={h1}>
                <span className="d1"></span>
                <span className="d2"></span>
                <span className="d3"></span>
                <span className="d4"></span>
                <span className="d5"></span>
                <span className="d6"></span>
                <span className="d7"></span>
              </div>
              <div className={h2}>
                <span className="d1"></span>
                <span className="d2"></span>
                <span className="d3"></span>
                <span className="d4"></span>
                <span className="d5"></span>
                <span className="d6"></span>
                <span className="d7"></span>
              </div>
              <div className="dots"></div>
              <div className={m1}>
                <span className="d1"></span>
                <span className="d2"></span>
                <span className="d3"></span>
                <span className="d4"></span>
                <span className="d5"></span>
                <span className="d6"></span>
                <span className="d7"></span>
              </div>
              <div className={m2}>
                <span className="d1"></span>
                <span className="d2"></span>
                <span className="d3"></span>
                <span className="d4"></span>
                <span className="d5"></span>
                <span className="d6"></span>
                <span className="d7"></span>
              </div>
              <div className="dots"></div>
              <div className={s1}>
                <span className="d1"></span>
                <span className="d2"></span>
                <span className="d3"></span>
                <span className="d4"></span>
                <span className="d5"></span>
                <span className="d6"></span>
                <span className="d7"></span>
              </div>
              <div className={s2}>
                <span className="d1"></span>
                <span className="d2"></span>
                <span className="d3"></span>
                <span className="d4"></span>
                <span className="d5"></span>
                <span className="d6"></span>
                <span className="d7"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
