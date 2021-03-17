import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path224(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 11.61 6.37" style={styles.path75}>
        <Path
          strokeWidth={0}
          fill="rgba(240,153,122,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M11.51 4.73 C11.51 4.73 5.31 3.81 3.12 2.79 C1.82 2.20 0.74 1.22 0.00 0.00 C0.39 1.24 1.03 2.39 1.87 3.38 C3.54 5.31 11.61 6.37 11.61 6.37 L11.51 4.73 Z"
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
  path75: {
    height: 6,
    width: 12
  }
});

export default Path224;
