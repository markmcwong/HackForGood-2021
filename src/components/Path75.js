import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path75(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 18" style={styles.path38}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M20.00 3.74 C18.65 4.21 17.20 4.48 16.00 3.78 C15.18 3.30 14.55 2.41 13.61 2.22 C12.75 2.05 11.88 2.56 11.34 3.25 C10.83 3.99 10.42 4.79 10.14 5.64 C9.53 7.13 8.79 8.56 7.93 9.90 C7.39 10.73 6.68 11.61 5.72 11.65 C4.41 11.71 3.52 10.21 2.25 9.85 C-0.86 8.95 0.94 12.49 1.40 13.83 C1.85 15.15 2.00 16.56 1.86 17.95 C1.76 17.97 1.65 17.99 1.55 18.00 C-1.38 12.73 -0.04 6.02 4.66 2.38 C9.37 -1.25 15.96 -0.67 20.00 3.74 Z"
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
  path38: {
    height: 18,
    width: 20
  }
});

export default Path75;
