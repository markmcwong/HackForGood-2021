import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval7(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 10.21 10.25" style={styles.oval1}>
        <Path
          strokeWidth={0}
          fill="rgba(38,194,129,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M5.10 10.25 C7.92 10.25 10.21 7.96 10.21 5.13 C10.21 2.29 7.92 0.00 5.10 0.00 C2.29 0.00 0.00 2.29 0.00 5.13 C0.00 7.96 2.29 10.25 5.10 10.25 Z"
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
    height: 10,
    width: 10
  }
});

export default Oval7;
