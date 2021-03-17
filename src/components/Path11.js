import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path11(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 10 9" style={styles.path12}>
        <Path
          strokeWidth={0}
          fill="rgba(255,184,184,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M9.75 5.49 C9.45 4.86 8.92 4.40 8.29 4.25 C7.66 4.09 6.99 4.25 6.48 4.68 L0.01 0.00 L0.00 4.41 L6.15 8.18 C6.88 9.10 8.13 9.27 9.04 8.58 C9.96 7.89 10.27 6.56 9.75 5.49 Z"
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
    height: 9,
    width: 10
  }
});

export default Path11;
