import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path189(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 14.69 9.1" style={styles.path40}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M0.00 6.26 C0.00 6.26 4.77 9.17 9.57 6.82 C12.33 5.58 14.23 3.00 14.60 0.00 C14.60 0.00 15.79 5.67 9.70 8.35 C6.36 9.87 2.42 9.02 0.00 6.26 Z"
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
  path40: {
    height: 9,
    width: 15
  }
});

export default Path189;
