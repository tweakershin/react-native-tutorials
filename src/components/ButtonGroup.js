import React, { Component } from "react";
import { Button, View } from "react-native";

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "신윤수"
    };
  }
  onPressButton1() {
    alert("버튼 클릭2");
  }
  alertStateName() {
    alert(this.state.name);
  }

  render() {
    return (
      <View>
        {/* 기본 버튼 그룹입니다. */}
        {/* 안드로이드와 IOS가 다릅니다.. */}
        <Button onPress={() => alert("버튼 클릭1")} title="눌러주세요" />
        <Button onPress={this.onPressButton1} title="버튼2클릭" />
        <Button onPress={this.alertStateName.bind(this)} title="이름 보기" />
      </View>
    );
  }
}
