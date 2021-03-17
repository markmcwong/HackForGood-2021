import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path310(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 16 25.01" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(230,230,230,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.91 24.49 C3.75 25.56 6.90 24.96 9.23 22.91 C12.14 20.27 13.06 15.92 13.80 11.90 L16.00 0.00 L11.40 3.42 C8.09 5.88 4.70 8.41 2.41 11.97 C0.12 15.53 -0.89 20.39 0.96 24.25 "
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
  path: {
    height: 25,
    width: 16
  }
});

export default Path310;
