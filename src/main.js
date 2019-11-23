import React from "react";
import DefaultClock from "./components/DefaultClock";
import SimpleClock from "./components/SimpleClock";
import Footer from "./components/Footer";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.addZone = this.addZone.bind(this);
    this.removeZone = this.removeZone.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.state = {
      theme: "default",
      mode: "default",
      date: new Date(),
      isOn: "false",
      startTime: null
    };
  }

  tick() {
    const now = new Date();
    this.setState({
      ...this.state,
      date: now
    });
    if (this.state.isOn && now.getSeconds() == 0) {
      this.syncOnair();
    }
  }
  syncOnair() {
    // update on air status
    window.hyExt.context
      .getLiveInfo()
      .then(liveInfo => {
        console.log(liveInfo);
        this.setState({
          ...this.state,
          isOn: liveInfo.isOn,
          startTime: liveInfo.startTime
        });
      })
      .catch(err => {
        console.log("get liveInfo failed", err);
      });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("log start", window.hyExt);
    window.hyExt.onLoad(() => {
      console.log("虎牙小程序SDK onLoad触发");

      window.hyExt.onEnterForeground(() => {
        console.log("进入前台");
      });
      window.hyExt.onLeaveForeground(() => {
        console.log("退出前台");
      });
    });
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  changeTheme() {
    const themeArray = ["default", "digitalLight", "digitalDark", "digitalRed"];
    const index = themeArray.indexOf(this.state.theme);
    const newIndex = (index + 1) % themeArray.length;
    this.setState({
      theme: themeArray[newIndex]
    });
  }
  changeMode() {
    const modeArray = ["default", "onair"];
    const index = modeArray.indexOf(this.state.mode);
    const newIndex = (index + 1) % modeArray.length;
    if (newIndex == 1) {
      this.syncOnair();
    }
    this.setState({
      ...this.state,
      mode: modeArray[newIndex]
    });
  }
  addZone(e) {
    e.preventDefault();
    window.hyExt.stream
      .addZone(document.getElementById("clock1"), {
        screenColor: "#222"
      })
      // .addWhiteBoard({
      //   elem: document.getElementById("clock1"),
      //   alpha: 100
      // })
      .then(() => {
        console.log("创建白板成功");
      })
      .catch(err => {
        console.log("创建白板失败", err);
      });
  }
  removeZone() {
    window.hyExt.stream
      .removeZone()
      .then(() => {
        console.log("删除白板成功");
      })
      .catch(err => {
        console.log("删除白板失败", err);
      });
  }
  render() {
    const { theme, mode } = this.state;

    let hour = this.state.date.getHours();
    let minute = this.state.date.getMinutes();
    let second = this.state.date.getSeconds();
    if (this.state.mode == "onair") {
      if (this.state.isOn === "true") {
        const gap =
          Math.floor(this.state.date.getTime() / 1000) - this.state.startTime;
        hour = Math.floor(gap / 3600);
        minute = Math.floor((gap - hour * 3600) / 60);
        second = gap - hour * 3600 - minute * 60;
      } else {
        hour = 0;
        minute = 0;
        second = 0;
      }
    }

    return (
      <div>
        {theme == "default" && (
          <DefaultClock
            myid="clock1"
            hour={hour}
            minute={minute}
            second={second}
          />
        )}
        {theme == "digitalLight" && (
          <SimpleClock
            myid="clock1"
            theme="light"
            hour={hour}
            minute={minute}
            second={second}
          />
        )}
        {theme == "digitalDark" && (
          <SimpleClock
            myid="clock1"
            theme="dark"
            hour={hour}
            minute={minute}
            second={second}
          />
        )}
        {theme == "digitalRed" && (
          <SimpleClock
            myid="clock1"
            theme="red"
            hour={hour}
            minute={minute}
            second={second}
          />
        )}
        <div className="mode">
          {mode == "default" && <span>显示模式 : 当前时间</span>}
          {mode == "onair" && this.state.isOn === "false" && (
            <span>显示模式 : 开播时间 状态：未开播</span>
          )}
          {mode == "onair" && this.state.isOn === "true" && (
            <span>显示模式 : 开播时间 状态：正在直播</span>
          )}
        </div>
        <a
          href="#"
          onClick={this.changeTheme}
          className="weui-btn weui-btn_primary"
        >
          换个主题
        </a>
        <a
          href="#"
          onClick={this.changeMode}
          className="weui-btn weui-btn_primary"
        >
          {this.state.mode == "default" && <span>显示开播时间</span>}
          {this.state.mode == "onair" && <span>显示当前时间</span>}
        </a>
        <a
          href="#"
          onClick={this.addZone}
          className="weui-btn weui-btn_primary"
        >
          添加到场景
        </a>
        <a
          href="#"
          onClick={this.removeZone}
          className="weui-btn weui-btn_primary"
        >
          从场景删除
        </a>
        <Footer />
      </div>
    );
  }
}
