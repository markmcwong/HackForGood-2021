import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval55(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 53 54" style={styles.oval1}>
        <Path
          strokeWidth={0}
          fill="rgba(245,166,35,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M26.50 54.00 C41.14 54.00 53.00 41.91 53.00 27.00 C53.00 12.09 41.14 0.00 26.50 0.00 C11.86 0.00 0.00 12.09 0.00 27.00 C0.00 41.91 11.86 54.00 26.50 54.00 Z"
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
    height: 54,
    width: 53
  }
});

export default Oval55;
