import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path175(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 23.53 28.05" style={styles.path26}>
        <Path
          strokeWidth={0}
          fill="rgba(255,182,33,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M8.00 0.60 C5.06 1.58 2.63 3.68 1.24 6.46 C-0.15 9.23 -0.38 12.44 0.60 15.38 C3.52 24.19 11.27 23.24 12.45 26.78 C12.75 27.45 13.38 27.91 14.10 27.98 C16.09 28.27 18.10 27.61 19.52 26.18 C20.05 25.69 20.28 24.95 20.11 24.24 L20.11 24.24 C18.93 20.70 25.72 16.82 22.79 8.01 C20.75 1.88 14.13 -1.44 8.00 0.60 Z"
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
  path26: {
    height: 28,
    width: 24
  }
});

export default Path175;
