import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path211(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 30.96 10.47" style={styles.path62}>
        <Path
          strokeWidth={0}
          fill="rgba(38,50,56,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M30.79 5.79 C31.05 6.54 31.00 7.37 30.66 8.09 C30.34 8.77 26.85 10.76 22.06 10.44 C18.54 10.19 15.14 9.00 12.23 6.99 C10.42 5.78 8.53 5.56 6.18 5.42 C3.83 5.28 0.73 4.11 0.21 3.00 C-0.31 1.89 0.29 0.00 0.29 0.00 L30.79 5.79 Z"
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
    height: 10,
    width: 31
  }
});

export default Path211;
