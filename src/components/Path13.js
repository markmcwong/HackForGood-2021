import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path13(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 27 25" style={styles.path14}>
        <Path
          strokeWidth={0}
          fill="rgba(255,180,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M25.17 25.00 C24.97 25.00 24.76 24.95 24.58 24.85 L13.52 18.92 C12.88 18.58 12.28 18.12 11.77 17.57 L0.98 6.08 C-0.27 4.75 -0.33 2.61 0.85 1.20 C2.03 -0.21 4.04 -0.40 5.44 0.76 L17.13 14.54 L26.39 20.79 C26.90 21.13 27.12 21.79 26.93 22.40 L26.41 24.05 C26.23 24.62 25.73 25.00 25.17 25.00 Z"
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
  path14: {
    height: 25,
    width: 27
  }
});

export default Path13;
