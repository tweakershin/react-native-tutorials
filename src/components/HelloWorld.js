import React, { Component } from "react";

import { View, Text } from "react-native";

// Hello World라는 이름의 클래스 컴포넌트를 export.
export default class HelloWorld extends Component {
  // render함수가 반드시 있어야 함.
  render() {
    return (
      <View>
        <Text style={{ color: "blue", fontSize: 30 }}>Hello World</Text>
      </View>
    );
  }
}
