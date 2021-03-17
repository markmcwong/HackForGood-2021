import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path55(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 46 14" style={styles.path18}>
        <Path
          strokeWidth={0}
          fill="rgba(250,189,189,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.18 3.26 C0.18 3.26 -1.55 15.00 5.65 13.93 C5.65 13.93 34.22 6.99 35.71 8.59 C37.20 10.19 46.47 10.74 45.98 3.99 C45.50 -2.79 36.21 1.12 36.21 1.12 C36.21 1.12 21.80 3.26 18.82 1.65 C15.83 0.05 7.39 0.59 7.39 0.59 L0.18 3.26 Z"
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
  path18: {
    height: 14,
    width: 46
  }
});

export default Path55;
