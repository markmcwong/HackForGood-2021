import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path14(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 14 7" style={styles.path15}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 4.11 C1.10 5.51 2.69 6.48 4.46 6.84 C6.26 7.20 8.14 6.94 9.76 6.10 C11.07 5.42 12.11 4.39 13.14 3.37 C13.57 2.95 14.02 2.46 14.00 1.88 C13.97 0.99 12.86 0.50 11.91 0.31 C8.79 -0.33 5.55 0.03 2.66 1.32 C1.37 1.90 0.02 2.95 0.22 4.26 "
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
  path15: {
    height: 7,
    width: 14
  }
});

export default Path14;
