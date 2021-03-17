import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval43(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8 12" style={styles.oval8}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.00 12.00 C6.21 12.00 8.00 9.31 8.00 6.00 C8.00 2.69 6.21 0.00 4.00 0.00 C1.79 0.00 0.00 2.69 0.00 6.00 C0.00 9.31 1.79 12.00 4.00 12.00 Z"
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
  oval8: {
    height: 12,
    width: 8
  }
});

export default Oval43;
