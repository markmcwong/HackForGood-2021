import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path111(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 19 19" style={styles.path74}>
        <Path
          strokeWidth={0}
          fill="rgba(230,230,230,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 13.29 L5.62 19.00 L19.00 4.76 L12.21 0.00 L0.00 13.29 Z"
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
  path74: {
    height: 19,
    width: 19
  }
});

export default Path111;
