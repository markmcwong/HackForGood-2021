import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path139(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 7 10" style={styles.path26}>
        <Path
          strokeWidth={0}
          fill="rgba(69,75,105,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.20 0.00 L0.00 10.00 L5.28 9.64 L7.00 0.00 L1.20 0.00 Z"
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
  path26: {
    height: 10,
    width: 7
  }
});

export default Path139;
