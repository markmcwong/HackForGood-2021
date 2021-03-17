import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path244(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7.54 5.1" style={styles.path95}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.60 3.08 C-0.53 1.69 -0.02 0.33 1.73 0.04 C3.68 -0.18 5.62 0.56 6.95 2.02 C8.07 3.42 7.57 4.78 5.81 5.06 C3.86 5.29 1.92 4.55 0.60 3.08 Z"
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
  path95: {
    height: 5,
    width: 8
  }
});

export default Path244;
