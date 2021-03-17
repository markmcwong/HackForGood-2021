import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path54(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 26 107" style={styles.path17}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M26.00 6.81 C26.00 6.81 23.38 33.78 22.18 39.55 C21.43 43.34 20.95 47.19 20.75 51.07 C20.75 51.07 20.51 59.45 18.37 61.81 C17.10 63.19 16.40 65.08 16.46 67.05 C16.46 67.05 14.31 93.50 15.50 96.64 C16.70 99.78 18.31 103.86 17.12 105.96 C15.93 108.06 2.38 106.59 2.38 105.02 C2.38 103.45 2.38 102.14 1.67 101.35 C0.95 100.57 1.67 95.59 1.67 95.59 C1.67 95.59 -1.20 72.28 1.43 65.47 C4.05 58.66 5.24 40.07 5.24 40.07 C5.24 40.07 3.34 18.86 0.95 15.45 C-1.44 12.05 1.43 0.00 1.43 0.00 L26.00 6.81 Z"
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
  path17: {
    height: 107,
    width: 26
  }
});

export default Path54;
