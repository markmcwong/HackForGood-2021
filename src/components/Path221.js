import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path221(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 32.19 43.92" style={styles.path72}>
        <Path
          strokeWidth={0}
          fill="rgba(230,194,167,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M7.83 18.61 C7.16 19.06 6.12 17.78 5.23 16.95 C4.33 16.12 1.52 15.04 0.30 18.02 C-0.92 21.00 1.87 24.83 4.07 25.40 C7.89 26.38 8.31 23.94 8.31 23.94 L9.32 37.46 C9.32 37.46 12.08 43.34 18.75 43.88 C25.43 44.43 23.77 39.02 21.46 36.45 L21.23 32.34 C22.91 32.51 24.60 32.51 26.28 32.34 C29.00 31.76 30.62 29.49 31.29 26.46 C32.38 21.59 32.68 17.69 31.05 8.32 C29.25 -1.96 17.27 -1.42 11.01 3.01 C4.75 7.45 7.83 18.61 7.83 18.61 Z"
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
  path72: {
    height: 44,
    width: 32
  }
});

export default Path221;
