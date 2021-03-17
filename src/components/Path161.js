import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path161(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 42.54 26.61" style={styles.path12}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.15}
          strokeOpacity={0.15}
          d="M0.00 24.64 L0.00 26.61 C0.29 26.61 0.57 26.54 0.83 26.41 L17.47 16.77 L41.71 2.61 C42.20 2.29 42.51 1.75 42.54 1.17 L42.54 0.81 C42.53 0.53 42.45 0.25 42.30 0.00 L0.00 24.64 Z"
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
    height: 27,
    width: 43
  }
});

export default Path161;
