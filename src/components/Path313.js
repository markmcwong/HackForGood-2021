import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path313(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 14 11.01" style={styles.path3}>
        <Path
          strokeWidth={0}
          fill="rgba(242,242,242,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.04 10.55 C2.32 6.46 4.96 1.92 9.68 0.47 C10.99 0.06 12.36 -0.08 13.73 0.04 C14.16 0.08 14.05 0.75 13.62 0.71 C11.33 0.52 9.05 1.14 7.15 2.45 C5.33 3.71 3.91 5.46 2.71 7.32 C1.98 8.45 1.32 9.64 0.66 10.82 C0.45 11.20 -0.17 10.93 0.04 10.55 Z"
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
  path3: {
    height: 11,
    width: 14
  }
});

export default Path313;
