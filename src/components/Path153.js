import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path153(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 17.7 63.7" style={styles.path4}>
        <Path
          strokeWidth={0}
          fill="rgba(69,90,100,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M17.69 62.56 C17.68 62.46 17.67 62.35 17.65 62.24 L5.02 2.91 L0.00 0.00 L13.37 62.69 C13.46 62.96 13.64 63.18 13.89 63.31 C14.93 63.84 16.15 63.84 17.19 63.31 C17.43 63.20 17.61 63.00 17.70 62.76 C17.70 62.69 17.70 62.63 17.69 62.56 Z"
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
  path4: {
    height: 64,
    width: 18
  }
});

export default Path153;
