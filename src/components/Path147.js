import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path147(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 80 36" style={styles.path34}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M80.00 1.94 L80.00 34.26 C80.00 35.22 78.46 36.00 76.55 36.00 L3.45 36.00 C1.55 36.00 0.00 35.22 0.00 34.26 L0.00 1.94 C0.00 0.98 1.55 0.00 3.45 0.00 L76.55 0.00 C78.46 0.00 80.00 0.98 80.00 1.94 Z"
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
  path34: {
    height: 36,
    width: 80
  }
});

export default Path147;
