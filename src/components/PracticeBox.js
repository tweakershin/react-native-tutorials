import React from "react";
import { View, Text } from "react-native";

const PracticeBox = props => {
  return (
    <View>
      <View style={{ width: 50, height: 50, backgroundColor: "blue" }}>
        <Text>50x50</Text>
      </View>
      <View style={{ width: 100, height: 100, backgroundColor: "black" }}>
        <Text style={{ color: "white" }}>100x100</Text>
      </View>
      <View style={{ width: 150, height: 150, backgroundColor: "red" }}>
        <Text>150x150</Text>
      </View>
    </View>
  );
};

export default PracticeBox;
