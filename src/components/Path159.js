import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path159(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 42.54 26.59" style={styles.path10}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.15}
          strokeOpacity={0.15}
          d="M0.00 24.62 L0.00 26.59 C0.29 26.59 0.57 26.52 0.83 26.39 L17.47 16.75 L41.71 2.58 C42.20 2.26 42.51 1.73 42.54 1.15 L42.54 0.81 C42.53 0.53 42.45 0.25 42.30 0.00 L0.00 24.62 Z"
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
  path10: {
    height: 27,
    width: 43
  }
});

export default Path159;
