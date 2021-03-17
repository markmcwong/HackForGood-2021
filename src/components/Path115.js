import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path115(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 70 92" style={styles.path2}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M0.00 0.60 C-0.01 9.77 2.63 18.67 7.49 25.87 C-3.79 42.62 -2.15 66.69 11.25 81.15 C24.66 95.62 45.34 95.62 58.75 81.15 C72.16 66.69 73.80 42.62 62.51 25.87 C67.20 18.91 0.00 -3.99 0.00 0.60 Z"
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
  path2: {
    height: 92,
    width: 70
  }
});

export default Path115;
