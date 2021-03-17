import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path306(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 65 44" style={styles.path23}>
        <Path
          strokeWidth={0}
          fill="rgba(255,184,184,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M15.75 6.25 C15.85 6.67 15.91 7.09 15.93 7.52 L48.60 26.65 L56.54 22.01 L65.00 33.25 L51.73 42.85 C49.53 44.45 46.56 44.37 44.43 42.67 L10.75 15.70 C7.64 16.87 4.14 15.96 1.96 13.42 C-0.22 10.88 -0.62 7.24 0.95 4.27 C2.52 1.30 5.74 -0.37 9.03 0.07 C12.32 0.51 14.99 2.97 15.75 6.25 Z"
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
  path23: {
    height: 44,
    width: 65
  }
});

export default Path306;
