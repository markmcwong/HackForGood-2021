import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path52(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 34 18" style={styles.path15}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M3.28 1.16 C3.28 1.16 -1.93 15.37 0.79 17.09 C3.51 18.80 32.07 17.58 32.07 17.58 C32.07 17.58 36.83 14.39 31.39 12.19 C31.39 12.19 26.86 11.94 23.91 9.98 C20.96 8.02 17.56 4.35 17.56 4.35 C17.56 4.35 17.34 -1.04 15.52 0.18 C14.43 0.96 13.68 2.21 13.48 3.61 L3.28 1.16 Z"
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
  path15: {
    height: 18,
    width: 34
  }
});

export default Path52;
