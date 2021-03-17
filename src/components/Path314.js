import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path314(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 32 47.02" style={styles.path4}>
        <Path
          strokeWidth={0}
          fill="rgba(230,230,230,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M30.18 46.03 C24.50 48.06 18.20 46.93 13.54 43.06 C7.71 38.10 5.88 29.94 4.40 22.37 C2.93 14.91 1.47 7.46 0.00 0.00 L9.21 6.43 C15.83 11.05 22.60 15.82 27.18 22.51 C31.77 29.20 33.77 38.34 30.09 45.58 "
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
  path4: {
    height: 47,
    width: 32
  }
});

export default Path314;
