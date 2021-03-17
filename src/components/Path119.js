import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path119(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 74 18" style={styles.path6}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M71.01 10.80 L53.50 10.80 C53.92 10.16 54.15 9.37 54.15 8.55 C54.15 8.09 54.07 7.63 53.93 7.20 L62.00 7.20 C63.66 7.20 65.00 5.59 65.00 3.60 C65.00 1.61 63.66 0.00 62.00 0.00 L13.74 0.00 C12.09 0.01 10.75 1.61 10.75 3.60 C10.75 4.06 10.83 4.52 10.97 4.95 L2.90 4.95 C1.28 5.01 0.00 6.61 0.00 8.55 C0.00 10.49 1.28 12.09 2.90 12.15 L20.40 12.15 C19.98 12.79 19.75 13.58 19.76 14.40 C19.76 16.39 21.10 17.99 22.75 18.00 L71.01 18.00 C72.66 18.00 74.00 16.39 74.00 14.40 C74.00 12.41 72.66 10.80 71.01 10.80 Z"
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
  path6: {
    height: 18,
    width: 74
  }
});

export default Path119;
