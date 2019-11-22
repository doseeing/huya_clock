import React from "react";
import "../assets/scss/simple.scss";

export default class SimpleClock extends React.Component {
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
    const dt = this.state.date;
    const h1 = "n" + Math.floor(dt.getHours() / 10);
    const h2 = "n" + (dt.getHours() % 10);
    const m1 = "n" + Math.floor(dt.getMinutes() / 10);
    const m2 = "n" + (dt.getMinutes() % 10);
    const s1 = "n" + Math.floor(dt.getSeconds() / 10);
    const s2 = "n" + (dt.getSeconds() % 10);
    return (
      <div id={this.props.myid} className="clock">
        <div id="clock" className="light">
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
