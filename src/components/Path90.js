import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path90(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8 8" style={styles.path53}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M8.00 0.00 C8.00 0.00 4.72 7.70 0.83 7.99 C-3.06 8.28 8.00 0.00 8.00 0.00 Z"
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
  path53: {
    height: 8,
    width: 8
  }
});

export default Path90;
