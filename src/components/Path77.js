import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path77(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 0.39 0.4" style={styles.path40}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.18 0.17 C0.19 0.19 0.20 0.21 0.22 0.23 L0.18 0.17 Z"
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
  path40: {
    height: 0,
    width: 0
  }
});

export default Path77;
