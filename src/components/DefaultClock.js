import React from "react";
import "../assets/scss/default_clock.scss";

export default class Clock extends React.Component {
  render() {
    return (
      <div id={this.props.myid} className="clock">
        <div id="time">
          <span id="hours">{this.props.hour.toString().padStart(2, "0")}</span>
          <span className="split">:</span>
          <span id="min">{this.props.minute.toString().padStart(2, "0")}</span>
          <span className="split">:</span>
          <span id="sec">{this.props.second.toString().padStart(2, "0")}</span>
        </div>
        {/* <div id="fullDate">
          <span id="year">{this.state.date.getFullYear()}</span>年
          <span id="month">{this.state.date.getMonth()}</span>月
          <span id="date">{this.state.date.getDate()}</span>日
        </div> */}
      </div>
    );
  }
}
