import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path287(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 1 11" style={styles.path4}>
        <Path
          strokeWidth={0}
          fill="rgba(204,204,204,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.50 11.00 C0.22 11.00 0.00 10.77 0.00 10.49 L0.00 0.51 C0.00 0.23 0.22 0.00 0.50 0.00 C0.78 0.00 1.00 0.23 1.00 0.51 L1.00 10.49 C1.00 10.77 0.78 11.00 0.50 11.00 Z"
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
  path4: {
    height: 11,
    width: 1
  }
});

export default Path287;
