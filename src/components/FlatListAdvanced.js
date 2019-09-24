import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput
} from "react-native";

import FlatListItem from "./FlatListItem";
import AddressSearchInput from "./AddressSearchInput";

let addressBook = [
  {
    name: "영수",
    phone: "010-4650-5822",
    key: "1"
  },
  {
    name: "윤수",
    phone: "010-1234-3421",
    key: "2"
  },
  {
    name: "영희",
    phone: "010-5723-8231",
    key: "3"
  },
  {
    name: "민수",
    phone: "010-2131-8231",
    key: "4"
  }
];
export default class FlatListAdvanced extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };
  }

  setSearchText(text) {
    this.setState({ searchText: text });
  }

  _renderItem = ({ item, index }) => {
    if (this.state.searchText == "") {
      return <FlatListItem onPress={this.props.onPress} item={item} />;
    }
    if (item.name.startsWith(this.state.searchText)) {
      // if (item.name == this.state.searchText) {
      return <FlatListItem onPress={this.props.onPress} item={item} />;
    } else {
      return <View />;
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 52,
          width: "100%"
        }}
      >
        <AddressSearchInput onChangeText={this.setSearchText.bind(this)} />

        <FlatList
          data={addressBook}
          renderItem={this._renderItem}
          ItemSeparatorComponent={item => {
            return <View style={{ borderWidth: 1 }}></View>;
          }}
          keyExtractor={(item, index) => {
            return String(index);
          }}
        />
      </View>
    );
  }
}
