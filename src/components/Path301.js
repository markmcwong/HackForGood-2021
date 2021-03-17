import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path301(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 28 22" style={styles.path18}>
        <Path
          strokeWidth={0}
          fill="rgba(242,242,242,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M27.91 21.08 C23.36 12.91 18.08 3.83 8.65 0.93 C6.03 0.13 3.28 -0.16 0.55 0.08 C-0.31 0.16 -0.10 1.50 0.76 1.43 C5.34 1.04 9.90 2.27 13.69 4.90 C17.34 7.42 20.17 10.92 22.58 14.63 C24.05 16.90 25.37 19.27 26.68 21.64 C27.11 22.39 28.34 21.85 27.91 21.08 Z"
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
    height: 22,
    width: 28
  }
});

export default Path301;
