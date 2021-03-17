import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path231(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7.05 14.56" style={styles.path82}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.87 14.25 C7.63 16.63 5.81 4.48 4.58 2.61 C3.35 0.74 0.00 0.00 0.00 0.00 L0.21 3.83 C1.05 4.03 1.79 4.54 2.27 5.26 C4.17 8.05 5.72 11.07 6.87 14.25 Z"
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
  path82: {
    height: 15,
    width: 7
  }
});

export default Path231;
