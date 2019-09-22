import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.name}>안녕, {this.props.name}!</Text>
        {/* props.name을 부모로부터 전달받아 사용합니다. */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30
  }
});
