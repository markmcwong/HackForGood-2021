import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path232(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 11.18 13.73" style={styles.path83}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.92 L10.85 0.00 C10.85 0.00 11.18 6.89 11.18 8.72 C11.18 9.86 9.37 11.73 8.03 12.97 C7.16 13.78 5.89 13.96 4.84 13.42 C3.23 12.61 1.07 11.28 0.86 9.95 C0.52 7.81 0.00 0.92 0.00 0.92 Z"
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
  path83: {
    height: 14,
    width: 11
  }
});

export default Path232;
