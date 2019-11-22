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
    this.state = {
      theme: "default"
    };
  }
  componentDidMount() {
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
  componentWillUnmount() {}
  changeTheme() {
    const themeArray = ["default", "simple"];
    const index = themeArray.indexOf(this.state.theme);
    const newIndex = (index + 1) % themeArray.length;
    this.setState({
      theme: themeArray[newIndex]
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
    const { theme } = this.state;
    return (
      <div>
        {theme == "simple" && <DefaultClock myid="clock1" />}
        {theme == "default" && <SimpleClock myid="clock1" />}
        <a
          href="#"
          onClick={this.changeTheme}
          className="weui-btn weui-btn_primary"
        >
          换个主题
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
