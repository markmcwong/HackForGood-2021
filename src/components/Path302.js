import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path302(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 34 21" style={styles.path19}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M34.00 14.77 L33.77 15.28 L33.63 15.22 L33.63 15.22 L0.57 0.56 L28.22 20.49 L28.22 20.49 L28.29 20.55 L27.96 21.00 L27.48 20.65 L0.24 1.02 C0.02 0.86 -0.06 0.57 0.05 0.33 C0.17 0.08 0.44 -0.05 0.70 0.02 C0.73 0.02 0.76 0.03 0.79 0.05 L33.87 14.72 L34.00 14.77 Z"
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
  path19: {
    height: 21,
    width: 34
  }
});

export default Path302;
