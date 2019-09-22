import React, { Component } from "react";
import { Image } from "react-native";

export default class Bananas extends Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    // Image의 Props 이름은 soruce, 값은 pic객체
    return <Image source={pic} style={{ width: 193, height: 110 }} />;
  }
}
