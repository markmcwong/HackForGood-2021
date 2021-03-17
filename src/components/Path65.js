import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path65(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 6 8" style={styles.path28}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M6.00 0.00 C6.00 0.00 1.50 7.92 0.17 8.00 C-1.17 8.08 6.00 0.00 6.00 0.00 Z"
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
  path28: {
    height: 8,
    width: 6
  }
});

export default Path65;
