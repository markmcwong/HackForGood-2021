import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval26(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 1 1" style={styles.oval5}>
        <Path
          strokeWidth={0}
          fill="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.50 1.00 C0.78 1.00 1.00 0.78 1.00 0.50 C1.00 0.22 0.78 0.00 0.50 0.00 C0.22 0.00 0.00 0.22 0.00 0.50 C0.00 0.78 0.22 1.00 0.50 1.00 Z"
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
  oval5: {
    height: 1,
    width: 1
  }
});

export default Oval26;
