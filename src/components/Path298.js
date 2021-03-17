import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path298(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 32 47" style={styles.path15}>
        <Path
          strokeWidth={0}
          fill="rgba(230,230,230,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M30.18 46.01 C24.50 48.03 18.20 46.91 13.54 43.04 C7.71 38.09 5.88 29.92 4.40 22.36 C2.93 14.91 1.47 7.45 0.00 0.00 L9.21 6.42 C15.83 11.04 22.60 15.81 27.18 22.50 C31.77 29.19 33.77 38.32 30.09 45.56 "
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
    height: 47,
    width: 32
  }
});

export default Path298;
