import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path10(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7 11" style={styles.path11}>
        <Path
          strokeWidth={0}
          fill="rgba(255,184,184,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.96 9.32 C7.08 8.73 6.92 8.11 6.52 7.64 C6.11 7.18 5.51 6.90 4.87 6.89 L2.46 0.00 L0.00 2.96 L2.67 9.05 C2.72 10.09 3.59 10.93 4.69 11.00 C5.78 11.06 6.76 10.34 6.96 9.32 Z"
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
  path11: {
    height: 11,
    width: 7
  }
});

export default Path10;
