import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path97(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 47 48" style={styles.path60}>
        <Path
          strokeWidth={0}
          fill="rgba(250,189,189,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 5.03 L1.46 10.00 L7.16 18.76 C7.16 18.76 9.93 21.71 9.93 22.11 C9.93 22.51 20.11 30.25 24.40 32.41 C28.70 34.56 34.18 36.33 34.59 37.88 C34.99 39.43 37.44 51.01 44.36 47.26 C51.28 43.50 42.41 35.04 42.41 35.04 L36.71 30.09 C36.71 30.09 24.54 20.75 23.51 17.64 C22.47 14.53 18.41 11.81 18.41 11.81 L15.56 6.70 L4.90 0.00 L0.00 5.03 Z"
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
  path60: {
    height: 48,
    width: 47
  }
});

export default Path97;
