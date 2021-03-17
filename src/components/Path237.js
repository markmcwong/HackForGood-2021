import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path237(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 18.78 30.43" style={styles.path88}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M17.73 0.06 C15.12 -0.09 11.76 -0.06 9.39 1.39 C6.44 3.22 5.58 5.68 4.47 9.14 C3.36 12.59 0.00 23.98 0.00 23.98 L13.15 30.43 L17.99 16.73 C17.99 16.73 19.94 9.91 17.73 0.06 Z"
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
  path88: {
    height: 30,
    width: 19
  }
});

export default Path237;
