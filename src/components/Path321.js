import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path321(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 61 47.02" style={styles.path11}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 37.36 C16.96 46.78 36.99 49.44 55.91 44.78 C57.63 44.36 59.33 43.87 61.00 43.33 C59.51 38.60 57.74 33.97 55.69 29.44 L55.69 29.44 C52.27 21.95 49.13 17.36 47.60 15.34 C47.09 14.66 46.95 13.78 47.22 12.98 L47.70 11.59 C48.06 10.52 47.85 9.34 47.13 8.46 L47.13 8.45 C47.10 8.41 47.07 8.37 47.04 8.34 C34.60 -5.50 12.92 2.05 12.70 2.13 L12.59 2.16 L12.52 2.26 C12.45 2.36 12.37 2.45 12.30 2.56 C6.42 10.60 2.52 22.97 0.00 37.36 Z"
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
  path11: {
    height: 47,
    width: 61
  }
});

export default Path321;
