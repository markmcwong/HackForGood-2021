import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path125(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 9 16" style={styles.path12}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.08 14.51 C6.26 14.14 6.41 13.73 6.52 13.30 L7.68 9.26 C8.04 8.05 8.35 6.82 8.61 5.57 C8.90 4.07 9.03 2.53 9.00 0.99 C7.82 0.98 6.65 0.77 5.52 0.36 C5.09 0.17 4.65 0.05 4.20 0.00 C3.58 0.02 2.99 0.37 2.57 0.96 C2.15 1.55 1.94 2.34 1.97 3.14 C2.00 3.38 2.02 3.63 2.02 3.88 C2.00 4.12 1.94 4.36 1.86 4.58 L0.63 8.47 C0.28 9.41 0.07 10.42 0.00 11.46 C-0.09 15.09 4.30 17.82 6.08 14.51 Z"
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
  path12: {
    height: 16,
    width: 9
  }
});

export default Path125;
