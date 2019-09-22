import React from "react"; // 반드시 존재해야한다.
import { StyleSheet, Text, View } from "react-native"; // react-native 컴포넌트 import

// import HelloWorld from "./src/components/HelloWorld"; // Component import
import Bananas from "./src/components/Bananas"; // HelloWorld--> Bananas
import GreetingGroup from "./src/components/GreetingGroup";
import BlinkApp from "./src/components/BlinkApp";
import StyleApp from "./src/components/StyleApp";
import PracticeBox from "./src/components/PracticeBox";
import FlexDimensionsBasics from "./src/components/FlexDimensioinsBasics";
import FlexPractice from "./src/components/FlexPractice";
import BaseTextInput from "./src/components/BaseTextInput";
import ButtonGroup from "./src/components/ButtonGroup";
import FlatListBasics from "./src/components/FlatListBasics";
import SectionListBasics from "./src/components/SectionListBasics";
export default function App() {
  // 함수형 컴포넌트
  // JSX 문법
  // JSX에서 javascript코드를 작성하려면 {}로 감싸준다!
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      {/* <Bananas /> */}
      {/* <GreetingGroup /> */}
      {/*<BlinkApp /> */}
      {/*<StyleApp />*/}
      {/*<PracticeBox />*/}

      {/*<FlexDimensionsBasics />*/}
      {/* <FlexPractice /> */}
      {/* <BaseTextInput />*/}
      {/* <ButtonGroup />*/}
      {/*<FlatListBasics /> */}
      <SectionListBasics />
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
