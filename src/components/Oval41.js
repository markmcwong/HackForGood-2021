import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval41(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 15 23" style={styles.oval6}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M7.50 23.00 C11.64 23.00 15.00 17.85 15.00 11.50 C15.00 5.15 11.64 0.00 7.50 0.00 C3.36 0.00 0.00 5.15 0.00 11.50 C0.00 17.85 3.36 23.00 7.50 23.00 Z"
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
  oval6: {
    height: 23,
    width: 15
  }
});

export default Oval41;
