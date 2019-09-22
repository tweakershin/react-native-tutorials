import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 52, width: "100%" }}>
        <FlatList
          data={[
            { key: "영수" },
            { key: "윤수" },
            { key: "소희" },
            { key: "영진" },
            { key: "보라" },
            { key: "미영" },
            { key: "다희" }
          ]}
          renderItem={({ item }) => {
            return (
              <Text
                style={{
                  padding: 10,
                  fontSize: 18,
                  height: 44,
                  borderWidth: 1,
                  width: "80%"
                }}
              >
                {item.key}
              </Text>
            );
          }}
        />
      </View>
    );
  }
}
