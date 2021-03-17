import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval22(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 21 22" style={styles.oval1}>
        <Path
          strokeWidth={0}
          fill="rgba(160,97,106,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M10.50 22.00 C16.30 22.00 21.00 17.08 21.00 11.00 C21.00 4.92 16.30 0.00 10.50 0.00 C4.70 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.70 22.00 10.50 22.00 Z"
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
  oval1: {
    height: 22,
    width: 21
  }
});

export default Oval22;
