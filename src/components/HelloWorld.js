import React, { Component } from "react";

import { View, Text } from "react-native";

// Hello World라는 이름의 클래스 컴포넌트를 export.
export default class HelloWorld extends Component {
  // render함수가 반드시 있어야 함.
  render() {
    return (
      <View style={{ backgroundColor: "green" }}>
        <Text style={{ color: "red", fontSize: 40, fontStyle: "italic" }}>
          Hello World
        </Text>
      </View>
    );
  }
}
