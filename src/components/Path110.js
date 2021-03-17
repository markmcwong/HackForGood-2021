import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path110(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 31 25" style={styles.path73}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M30.82 0.00 C30.78 0.07 30.73 0.14 30.67 0.20 L9.10 23.78 C8.89 24.00 8.60 24.13 8.30 24.13 C8.00 24.12 7.72 23.99 7.51 23.76 L0.27 15.55 C0.22 15.49 0.18 15.43 0.14 15.37 C-0.11 15.83 -0.01 16.41 0.37 16.75 L7.46 24.63 C7.66 24.86 7.95 25.00 8.25 25.00 C8.55 25.00 8.84 24.88 9.05 24.65 L30.67 1.51 C31.05 1.11 31.11 0.48 30.82 0.00 Z"
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
  path73: {
    height: 25,
    width: 31
  }
});

export default Path110;
