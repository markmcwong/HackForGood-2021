import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path62(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3 9" style={styles.path25}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M3.00 0.00 C3.00 0.00 -0.86 7.76 0.18 8.91 C1.21 10.06 3.00 0.00 3.00 0.00 Z"
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
  path25: {
    height: 9,
    width: 3
  }
});

export default Path62;
