import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path157(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 58.07 35.46" style={styles.path8}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M14.70 35.27 L0.83 27.23 C0.34 26.91 0.03 26.37 0.00 25.79 L0.00 25.46 C0.03 24.88 0.34 24.34 0.83 24.02 L41.72 0.20 C42.24 -0.07 42.85 -0.07 43.37 0.20 L57.24 8.24 C57.73 8.55 58.04 9.09 58.07 9.67 L58.07 10.00 C58.04 10.59 57.73 11.12 57.24 11.44 L16.36 35.27 C15.84 35.53 15.22 35.53 14.70 35.27 Z"
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
  path8: {
    height: 35,
    width: 58
  }
});

export default Path157;
