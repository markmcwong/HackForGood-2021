import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path74(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 24 33" style={styles.path37}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M7.27 0.25 C7.27 0.25 -2.44 4.85 0.58 12.18 C3.61 19.51 10.22 33.00 10.22 33.00 C10.22 33.00 9.42 28.29 11.18 27.88 C12.93 27.47 24.00 29.61 24.00 29.61 C24.00 29.61 21.45 24.02 22.01 20.89 C22.56 17.77 17.79 -2.46 7.27 0.25 Z"
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
  path37: {
    height: 33,
    width: 24
  }
});

export default Path74;
