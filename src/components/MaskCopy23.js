import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MaskCopy23(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.5 -0.5 14 15" style={styles.maskCopy9}>
        <Path
          strokeWidth={1}
          fill="transparent"
          stroke="rgba(42,135,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.00 13.00 C9.31 13.00 12.00 10.09 12.00 6.50 C12.00 2.91 9.31 0.00 6.00 0.00 C2.69 0.00 0.00 2.91 0.00 6.50 C0.00 10.09 2.69 13.00 6.00 13.00 Z"
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
  maskCopy9: {
    height: 13,
    width: 12
  }
});

export default MaskCopy23;
