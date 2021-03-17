import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path85(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 24 25" style={styles.path48}>
        <Path
          strokeWidth={0}
          fill="rgba(250,189,189,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M24.00 12.48 C24.01 18.48 19.92 23.65 14.26 24.78 C8.60 25.91 2.97 22.68 0.84 17.10 C-1.28 11.52 0.71 5.16 5.58 1.94 C10.44 -1.27 16.82 -0.43 20.76 3.95 C22.84 6.26 24.00 9.31 24.00 12.48 Z"
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
  path48: {
    height: 25,
    width: 24
  }
});

export default Path85;
