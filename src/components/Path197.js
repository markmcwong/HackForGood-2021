import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path197(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3.9 2.93" style={styles.path48}>
        <Path
          strokeWidth={0}
          fill="rgba(242,143,143,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M3.70 0.00 L0.00 1.68 C0.20 2.18 0.60 2.58 1.10 2.78 C1.60 2.99 2.16 2.98 2.65 2.76 C3.16 2.54 3.56 2.12 3.76 1.60 C3.96 1.08 3.94 0.50 3.70 0.00 Z"
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
  path48: {
    height: 3,
    width: 4
  }
});

export default Path197;
