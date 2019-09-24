import React, { Component } from "react";
import { TextInput } from "react-native";

export default class AddressSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: "" };
  }
  render() {
    return (
      <TextInput
        style={{ height: 40, borderWidth: 1 }}
        placeholder="검색어 입력"
        onChangeText={this.props.onChangeText}
        value={this.state.text}
      />
    );
  }
}
