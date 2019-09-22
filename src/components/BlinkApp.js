import React, { Component } from "react";

import { View } from "react-native";

import Blink from "./Blink";

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="안녕하세요" />
        <Blink text="이 앱은" />
        <Blink text="2초에 한번 상태가 변경됩니다." />
      </View>
    );
  }
}
