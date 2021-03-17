import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path7(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 11 4" style={styles.path8}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.25 0.00 L11.00 0.00 L11.00 4.00 L0.00 4.00 L0.00 4.00 C0.00 2.94 0.45 1.92 1.24 1.17 C2.04 0.42 3.12 0.00 4.25 0.00 Z"
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
  path8: {
    height: 4,
    width: 11
  }
});

export default Path7;
