import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path99(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 24 33" style={styles.path62}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={0.1}
          strokeOpacity={0.1}
          d="M7.27 0.25 C7.27 0.25 -2.44 4.85 0.58 12.16 C3.61 19.47 10.22 33.00 10.22 33.00 C10.22 33.00 9.42 28.29 11.18 27.88 C12.93 27.47 24.00 29.60 24.00 29.60 C24.00 29.60 21.45 24.01 22.01 20.89 C22.56 17.76 17.80 -2.47 7.27 0.25 Z"
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
  path62: {
    height: 33,
    width: 24
  }
});

export default Path99;
