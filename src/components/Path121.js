import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path121(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 43 10" style={styles.path8}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M41.33 5.99 L31.16 5.99 C31.41 5.64 31.54 5.20 31.54 4.74 C31.54 4.49 31.50 4.24 31.41 4.00 L36.11 4.00 C37.07 4.00 37.85 3.11 37.85 2.00 C37.85 0.90 37.07 0.00 36.11 0.00 L8.03 0.00 C7.07 0.00 6.30 0.90 6.29 2.00 C6.30 2.26 6.34 2.51 6.42 2.74 L1.74 2.74 C0.78 2.74 0.00 3.64 0.00 4.74 C0.00 5.85 0.78 6.74 1.74 6.74 L11.91 6.74 C11.66 7.10 11.53 7.54 11.53 7.99 C11.53 9.10 12.31 10.00 13.27 10.00 L41.33 10.00 C42.26 9.95 43.00 9.07 43.00 8.00 C43.00 6.92 42.26 6.04 41.33 5.99 Z"
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
  path8: {
    height: 10,
    width: 43
  }
});

export default Path121;
