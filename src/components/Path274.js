import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path274(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 29.18 19.66" style={styles.path125}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.2}
          strokeOpacity={0.2}
          d="M0.00 12.16 L1.78 19.66 L3.06 15.40 L29.18 0.00 L0.00 12.16 Z"
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
  path125: {
    height: 20,
    width: 29
  }
});

export default Path274;
