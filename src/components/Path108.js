import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path108(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 31 30" style={styles.path71}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.34 20.53 C-0.10 20.97 -0.11 21.69 0.31 22.14 L7.41 29.65 C7.62 29.87 7.91 30.00 8.21 30.00 C8.51 30.00 8.80 29.88 9.01 29.67 L30.67 7.63 C30.91 7.38 31.03 7.04 30.99 6.70 C30.96 6.35 30.77 6.05 30.49 5.86 L21.97 0.19 C21.53 -0.11 20.95 -0.05 20.58 0.33 L0.34 20.53 Z"
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
  path71: {
    height: 30,
    width: 31
  }
});

export default Path108;
