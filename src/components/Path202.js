import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path202(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20.79 31.64" style={styles.path53}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.23 0.10 C3.07 -0.10 6.00 -0.11 8.51 1.07 C11.66 2.54 13.22 6.19 14.69 9.50 C16.16 12.81 20.79 23.73 20.79 23.73 L8.43 31.64 L2.07 18.63 C0.24 12.63 -0.39 6.34 0.23 0.10 Z"
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
  path53: {
    height: 32,
    width: 21
  }
});

export default Path202;
