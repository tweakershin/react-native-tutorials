import React, { Component } from "react";
import { Text, View } from "react-native";

export default class FlexPractice extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", width: "100%" }}>
        <View style={{ flex: 1, backgroundColor: "red" }}></View>

        <View style={{ flex: 8, flexDirection: "row" }}>
          <View style={{ backgroundColor: "green", flex: 1 }}></View>
          <View style={{ backgroundColor: "white", flex: 3 }}>
            <View
              style={{
                backgroundColor: "white",
                flex: 1,
                flexDirection: "column-reverse"
              }}
            ></View>
            <View
              style={{
                backgroundColor: "blue",
                flex: 1,
                flexDirection: "column-reverse"
              }}
            ></View>
          </View>
        </View>
      </View>
    );
  }
}
