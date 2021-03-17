import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval19(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.85 -0.85 18.64 18.91" style={styles.oval2}>
        <Path
          strokeWidth={1.7}
          fill="rgba(27,193,46,1)"
          stroke="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M8.47 16.36 C12.68 16.36 16.09 12.88 16.09 8.60 C16.09 4.32 12.68 0.85 8.47 0.85 C4.26 0.85 0.85 4.32 0.85 8.60 C0.85 12.88 4.26 16.36 8.47 16.36 Z"
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
  oval2: {
    height: 16,
    width: 15
  }
});

export default Oval19;
