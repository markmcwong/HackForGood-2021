import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path199(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 6.51 5.97" style={styles.path50}>
        <Path
          strokeWidth={0}
          fill="rgba(242,143,143,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.51 4.34 C3.90 3.16 0.00 0.00 0.00 0.00 C0.00 0.00 3.15 5.36 6.41 5.97 L6.51 4.34 Z"
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
  path50: {
    height: 6,
    width: 7
  }
});

export default Path199;
