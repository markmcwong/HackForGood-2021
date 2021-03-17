import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path16(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 74 7" style={styles.path17}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M70.39 0.00 L3.61 0.00 C1.67 0.00 0.08 1.49 0.01 3.36 C0.00 3.41 -0.00 3.45 0.00 3.50 C0.00 5.43 1.62 7.00 3.61 7.00 L70.39 7.00 C72.38 7.00 74.00 5.43 74.00 3.50 C74.00 1.57 72.38 0.00 70.39 0.00 Z"
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
  path17: {
    height: 7,
    width: 74
  }
});

export default Path16;
