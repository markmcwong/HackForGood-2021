import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path58(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 18 9" style={styles.path21}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M17.12 4.77 C16.06 5.91 15.20 7.18 14.58 8.52 C13.38 8.84 12.13 9.00 10.87 9.00 C6.35 9.00 3.85 6.24 1.72 3.22 C1.62 3.08 0.09 3.68 0.00 3.54 C0.35 1.62 0.55 0.13 0.55 0.13 C0.55 0.13 22.62 -1.21 17.12 4.77 Z"
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
  path21: {
    height: 9,
    width: 18
  }
});

export default Path58;
