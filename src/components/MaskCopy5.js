import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MaskCopy5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.5 -0.5 15 16" style={styles.maskCopy6}>
        <Path
          strokeWidth={1}
          fill="transparent"
          stroke="rgba(42,135,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.50 14.00 C10.09 14.00 13.00 10.87 13.00 7.00 C13.00 3.13 10.09 0.00 6.50 0.00 C2.91 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 2.91 14.00 6.50 14.00 Z"
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
  maskCopy6: {
    height: 14,
    width: 13
  }
});

export default MaskCopy5;
