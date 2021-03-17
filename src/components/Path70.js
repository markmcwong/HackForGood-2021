import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path70(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 22 30" style={styles.path33}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M22.00 30.00 C17.06 26.99 10.14 21.90 10.14 21.58 C10.14 21.19 7.31 18.30 7.31 18.30 L1.74 8.81 L0.00 4.91 L4.99 0.00 L15.89 6.55 L18.80 11.54 C19.77 12.18 20.67 12.90 21.50 13.69 C21.50 16.46 21.43 18.73 21.29 19.33 C21.03 20.38 21.51 25.31 22.00 30.00 Z"
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
  path33: {
    height: 30,
    width: 22
  }
});

export default Path70;
