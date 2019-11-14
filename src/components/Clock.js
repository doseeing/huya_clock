import React from "react";
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div id={this.props.myid} className="clock">
        <div id="time">
          <span id="hours">{this.state.date.getHours().toString().padStart(2, "0")}</span>
          <span className="split">:</span>
          <span id="min">{this.state.date.getMinutes().toString().padStart(2, "0")}</span>
          <span className="split">:</span>
          <span id="sec">{this.state.date.getSeconds().toString().padStart(2, "0")}</span>
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
