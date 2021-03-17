import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path234(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20.85 4.03" style={styles.path85}>
        <Path
          strokeWidth={0}
          fill="rgba(224,224,224,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M20.77 0.00 C13.79 0.71 6.86 1.80 0.00 3.26 L0.07 4.03 C6.93 2.56 13.87 1.47 20.85 0.76 C20.81 0.51 20.77 0.25 20.77 0.00 Z"
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
  path85: {
    height: 4,
    width: 21
  }
});

export default Path234;
