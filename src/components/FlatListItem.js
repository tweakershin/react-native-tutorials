import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class FlatListItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20 }}>{this.props.item.name}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20 }}>{this.props.item.phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
