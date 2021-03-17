import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path206(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20.79 18.58" style={styles.path57}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M20.62 13.53 C20.90 13.80 20.82 15.62 20.50 16.11 C20.19 16.60 18.26 18.26 14.80 18.52 C11.50 18.75 8.55 18.30 6.61 17.07 C4.67 15.84 3.72 14.47 3.56 12.58 C3.39 10.70 3.56 8.87 2.69 7.41 C1.82 5.96 0.54 4.56 0.25 3.83 C-0.08 2.58 -0.08 1.25 0.25 0.00 L20.62 13.53 Z"
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
  path57: {
    height: 19,
    width: 21
  }
});

export default Path206;
