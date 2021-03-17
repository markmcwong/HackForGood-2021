import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path79(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 1.87 1.84" style={styles.path42}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.66 0.43 C0.44 0.29 0.21 0.16 0.00 0.00 C0.04 0.18 0.12 0.35 0.23 0.50 C0.50 0.76 0.80 0.99 1.13 1.16 C1.41 1.34 1.66 1.57 1.87 1.84 C1.60 1.27 1.18 0.78 0.66 0.43 Z"
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
  path42: {
    height: 2,
    width: 2
  }
});

export default Path79;
