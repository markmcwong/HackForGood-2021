import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path17(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 18 16" style={styles.path18}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M7.05 16.00 C6.58 16.00 6.12 15.85 5.75 15.56 L5.73 15.55 L0.85 11.76 C0.23 11.28 -0.08 10.51 0.02 9.73 C0.12 8.95 0.62 8.29 1.34 7.99 C2.05 7.69 2.87 7.80 3.49 8.27 L6.65 10.73 L14.11 0.86 C14.46 0.40 14.98 0.10 15.55 0.02 C16.12 -0.06 16.70 0.10 17.15 0.45 L17.10 0.52 L17.15 0.45 C18.10 1.19 18.28 2.57 17.55 3.53 L8.77 15.14 C8.36 15.69 7.72 16.00 7.05 16.00 Z"
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
  path18: {
    height: 16,
    width: 18
  }
});

export default Path17;
