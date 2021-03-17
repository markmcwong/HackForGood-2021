import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path44(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 47 89" style={styles.path7}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M18.87 2.96 C16.49 4.43 15.07 7.13 14.25 9.87 C12.74 14.96 11.83 20.21 11.54 25.53 L10.68 41.43 L0.00 83.61 C9.26 91.74 14.60 89.89 27.06 83.24 C39.52 76.58 40.95 85.45 40.95 85.45 C40.95 85.45 42.02 85.08 40.95 83.97 C39.88 82.87 40.95 83.97 42.02 82.87 C43.08 81.76 42.02 82.87 41.66 81.76 C41.30 80.65 41.66 81.39 42.02 81.02 C42.37 80.65 40.59 77.32 40.59 77.32 L43.44 49.57 L47.00 10.36 C42.73 4.81 30.62 0.00 30.62 0.00 L19.58 8.14 C16.02 9.62 18.87 3.70 18.87 3.70 Z"
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
  path7: {
    height: 89,
    width: 47
  }
});

export default Path44;
