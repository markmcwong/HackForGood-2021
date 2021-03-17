import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MaskCopy7(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.5 -0.5 15 15" style={styles.maskCopy8}>
        <Path
          strokeWidth={1}
          fill="transparent"
          stroke="rgba(42,135,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.50 13.00 C10.09 13.00 13.00 10.09 13.00 6.50 C13.00 2.91 10.09 0.00 6.50 0.00 C2.91 0.00 0.00 2.91 0.00 6.50 C0.00 10.09 2.91 13.00 6.50 13.00 Z"
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
  maskCopy8: {
    height: 13,
    width: 13
  }
});

export default MaskCopy7;
