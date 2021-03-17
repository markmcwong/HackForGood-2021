import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path191(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.45 2.45" style={styles.path42}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 1.33 C0.06 1.99 0.64 2.49 1.31 2.45 C1.98 2.40 2.48 1.83 2.45 1.16 C2.41 0.49 1.84 -0.03 1.17 0.00 C0.84 0.02 0.53 0.17 0.31 0.42 C0.09 0.67 -0.02 0.99 0.00 1.33 Z"
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
  path42: {
    height: 2,
    width: 2
  }
});

export default Path191;
