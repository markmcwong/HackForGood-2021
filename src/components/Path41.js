import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path41(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 33 21" style={styles.path4}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M26.61 7.01 C27.52 6.00 28.36 4.93 29.13 3.79 C30.59 1.67 31.89 12.53 31.89 12.53 C31.89 12.53 33.30 16.58 32.94 18.79 C32.59 21.00 24.49 21.00 23.08 20.63 C21.68 20.26 14.63 21.00 14.63 21.00 L4.07 21.00 C-5.09 16.58 4.07 13.64 4.07 13.64 C6.89 13.27 16.39 4.07 16.39 4.07 L18.51 0.02 C19.91 -0.35 21.32 5.17 21.32 5.17 L26.61 7.01 Z"
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
  path4: {
    height: 21,
    width: 33
  }
});

export default Path41;
