import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path112(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2 2" style={styles.path75}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.07 1.93 C0.17 2.02 0.33 2.02 0.43 1.93 L1.93 0.42 C2.02 0.33 2.02 0.17 1.93 0.07 C1.83 -0.02 1.67 -0.02 1.57 0.07 L0.07 1.58 C-0.02 1.67 -0.02 1.83 0.07 1.93 Z"
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
  path75: {
    height: 2,
    width: 2
  }
});

export default Path112;
