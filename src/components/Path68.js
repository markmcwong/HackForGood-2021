import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path68(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 14" style={styles.path31}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M20.00 14.00 C16.97 12.80 11.70 10.49 9.31 8.13 C6.93 5.77 2.56 5.00 0.00 4.72 C0.29 3.80 0.25 2.64 0.30 1.66 C0.39 0.00 2.02 0.00 2.02 0.00 C6.69 0.74 17.67 7.71 17.67 7.71 C17.26 9.29 19.88 13.77 19.88 13.77 C19.92 13.85 19.96 13.92 20.00 14.00 Z"
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
  path31: {
    height: 14,
    width: 20
  }
});

export default Path68;
