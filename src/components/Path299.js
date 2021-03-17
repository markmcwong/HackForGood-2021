import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path299(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 14 46" style={styles.path16}>
        <Path
          strokeWidth={0}
          fill="rgba(242,242,242,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M12.61 45.50 C13.50 38.50 14.42 31.40 13.79 24.32 C13.24 18.04 11.46 11.90 7.84 6.86 C5.92 4.19 3.58 1.91 0.93 0.11 C0.24 -0.36 -0.39 0.82 0.30 1.29 C4.88 4.41 8.42 9.03 10.42 14.47 C12.62 20.52 12.98 27.11 12.60 33.53 C12.37 37.42 11.88 41.28 11.39 45.14 C11.31 45.50 11.50 45.87 11.83 45.98 C12.17 46.07 12.52 45.86 12.61 45.50 Z"
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
  path16: {
    height: 46,
    width: 14
  }
});

export default Path299;
