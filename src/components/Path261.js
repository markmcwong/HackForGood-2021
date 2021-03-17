import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path261(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 0.94 2.46" style={styles.path112}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.47 2.46 C0.21 2.46 0.00 2.25 0.00 1.99 L0.00 0.47 C0.00 0.21 0.21 0.00 0.47 0.00 C0.60 0.00 0.72 0.05 0.81 0.14 C0.89 0.23 0.94 0.35 0.94 0.47 L0.94 1.99 C0.94 2.12 0.89 2.24 0.81 2.32 C0.72 2.41 0.60 2.46 0.47 2.46 Z"
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
  path112: {
    height: 2,
    width: 1
  }
});

export default Path261;
