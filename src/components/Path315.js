import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path315(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 14 46.02" style={styles.path5}>
        <Path
          strokeWidth={0}
          fill="rgba(242,242,242,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M12.61 45.52 C13.50 38.51 14.42 31.42 13.79 24.33 C13.24 18.05 11.46 11.90 7.84 6.87 C5.92 4.20 3.58 1.91 0.93 0.11 C0.24 -0.36 -0.39 0.82 0.30 1.29 C4.88 4.42 8.42 9.03 10.42 14.47 C12.62 20.53 12.98 27.12 12.60 33.55 C12.37 37.44 11.88 41.30 11.39 45.16 C11.31 45.52 11.50 45.89 11.83 46.00 C12.17 46.10 12.52 45.88 12.61 45.52 Z"
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
  path5: {
    height: 46,
    width: 14
  }
});

export default Path315;
