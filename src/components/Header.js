import React, { Component } from "react";
import { Text } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <Text
        style={[
          { fontSize: 40, fontWeight: "bold", color: this.props.color },
          this.props.style
        ]}
      >
        {this.props.children || this.props.title}
      </Text>
    );
  }
}
