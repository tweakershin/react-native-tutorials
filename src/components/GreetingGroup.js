import React, { Component } from "react";

import { View } from "react-native";

import Greeting from "./Greeting";

export default class GreetingGroup extends Component {
  render() {
    return (
      <View>
        {/* 자식 컴포넌트에 props로 name을 전달합니다. */}
        <Greeting name="신윤수" />
        <Greeting name="김철수" />
        <Greeting name="한영희" />
        <Greeting name="고원희" />
      </View>
    );
  }
}
