import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path225(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.47 2.48" style={styles.path76}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.47 1.23 C2.48 1.91 1.94 2.46 1.27 2.48 C0.59 2.50 0.03 1.96 0.00 1.29 C-0.02 0.61 0.50 0.03 1.18 0.00 C1.51 -0.01 1.83 0.11 2.08 0.34 C2.32 0.57 2.46 0.89 2.47 1.23 Z"
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
  path76: {
    height: 2,
    width: 2
  }
});

export default Path225;
