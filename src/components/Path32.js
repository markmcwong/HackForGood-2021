import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path32(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 11.04 3.29" style={styles.path3}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M5.52 1.62 C4.00 1.70 2.50 1.20 1.31 0.20 C0.99 -0.08 0.52 -0.06 0.23 0.25 C-0.06 0.56 -0.08 1.05 0.20 1.37 C1.68 2.68 3.58 3.37 5.52 3.28 C7.46 3.37 9.36 2.68 10.85 1.37 C11.12 1.05 11.10 0.56 10.81 0.25 C10.52 -0.06 10.05 -0.08 9.73 0.20 C8.54 1.20 7.04 1.70 5.52 1.62 Z"
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
  path3: {
    height: 3,
    width: 11
  }
});

export default Path32;
