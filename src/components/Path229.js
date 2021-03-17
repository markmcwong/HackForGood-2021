import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path229(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 5.36 7.83" style={styles.path80}>
        <Path
          strokeWidth={0}
          fill="rgba(240,153,122,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.00 L1.44 7.83 L5.36 5.89 L0.00 0.00 Z"
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
  path80: {
    height: 8,
    width: 5
  }
});

export default Path229;
