import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path141(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 9.7 12.72" style={styles.path28}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.72 9.27 C5.99 8.61 5.26 7.94 4.53 7.27 C4.35 8.36 4.03 9.41 3.56 10.37 C3.14 9.94 2.69 9.57 2.19 9.26 L2.29 10.02 C1.14 9.00 0.52 7.30 0.35 5.62 C0.17 3.93 0.39 2.23 0.60 0.55 C0.62 0.36 0.65 0.17 0.67 0.00 C0.52 0.76 0.42 1.56 0.32 2.35 C0.10 4.03 -0.11 5.73 0.06 7.42 C0.23 9.10 0.84 10.80 2.00 11.82 L1.91 11.06 C2.40 11.37 2.86 11.74 3.28 12.17 C3.74 11.21 4.07 10.16 4.25 9.08 C4.98 9.74 5.71 10.41 6.44 11.08 C7.41 11.95 8.49 12.87 9.70 12.69 L9.00 10.80 C8.17 10.56 7.41 9.90 6.72 9.27 Z"
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
  path28: {
    height: 13,
    width: 10
  }
});

export default Path141;
