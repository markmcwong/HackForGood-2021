import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval49(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 13 16" style={styles.oval14}>
        <Path
          strokeWidth={0}
          fill="rgba(161,97,106,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.50 16.00 C10.09 16.00 13.00 12.42 13.00 8.00 C13.00 3.58 10.09 0.00 6.50 0.00 C2.91 0.00 0.00 3.58 0.00 8.00 C0.00 12.42 2.91 16.00 6.50 16.00 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0
  },
  oval14: {
    height: 16,
    width: 13
  }
});

export default Oval49;
