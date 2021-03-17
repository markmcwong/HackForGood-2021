import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path80(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 22 8" style={styles.path43}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M21.93 2.26 C21.93 2.26 18.56 -0.35 16.55 2.47 L15.34 2.47 C14.13 -1.37 8.15 0.41 8.15 0.41 L0.00 1.89 L0.15 2.47 L8.15 1.75 C8.15 1.75 8.34 5.35 9.42 6.51 C10.51 7.68 12.86 7.03 12.86 7.03 C14.29 6.83 14.97 4.36 15.22 3.14 L16.39 3.21 C16.18 4.45 16.04 6.87 17.95 7.71 C20.55 8.84 21.38 6.27 21.38 6.27 C21.38 6.27 22.24 2.95 21.93 2.26 Z"
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
  path43: {
    height: 8,
    width: 22
  }
});

export default Path80;
