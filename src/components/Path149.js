import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path149(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 19.58 46.5" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M16.33 0.00 L0.13 44.66 C-0.59 46.11 1.83 46.91 2.90 46.28 C3.21 46.07 3.47 45.78 3.66 45.45 L19.58 1.73 L16.33 0.00 Z"
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
  path: {
    height: 47,
    width: 20
  }
});

export default Path149;
