import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path18(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 110 1" style={styles.path19}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M109.71 1.00 L0.29 1.00 C0.13 1.00 0.00 0.78 0.00 0.50 C0.00 0.22 0.13 0.00 0.29 0.00 L109.71 0.00 C109.87 0.00 110.00 0.22 110.00 0.50 C110.00 0.78 109.87 1.00 109.71 1.00 Z"
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
  path19: {
    height: 1,
    width: 110
  }
});

export default Path18;
