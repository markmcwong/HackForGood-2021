import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path72(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 26 33" style={styles.path35}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M7.66 0.25 C7.66 0.25 -2.57 4.85 0.62 12.18 C3.81 19.51 10.77 33.00 10.77 33.00 C10.77 33.00 9.93 28.29 11.78 27.88 C13.62 27.47 26.00 29.49 26.00 29.49 C26.00 29.49 22.60 24.01 23.19 20.89 C23.78 17.77 18.74 -2.46 7.66 0.25 Z"
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
  path35: {
    height: 33,
    width: 26
  }
});

export default Path72;
