import React, { Component } from "react";
import { Text } from "react-native";

export default class Blink extends Component {
  constructor(props) {
    super(props); // 클래스형 컴포넌트에서 constructor를 정의하면 반드시 호출해주어야 합니다.

    this.state = { showText: true }; // component state 초기화

    // 2초마다 toggle하는 함수
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 2000);
  }

  render() {
    let display = this.state.showText ? this.props.text : "";
    return <Text style={{ fontSize: 30 }}>{display}</Text>;
  }
}
