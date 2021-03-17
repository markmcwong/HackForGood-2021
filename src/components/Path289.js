import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path289(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 88 132" style={styles.path6}>
        <Path
          strokeWidth={0}
          fill="rgba(242,242,242,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M88.00 85.89 C88.00 60.43 68.30 0.00 44.00 0.00 C19.70 0.00 0.00 60.43 0.00 85.89 C0.02 111.36 19.71 132.00 44.00 132.00 C68.29 132.00 87.98 111.36 88.00 85.89 Z"
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
  path6: {
    height: 132,
    width: 88
  }
});

export default Path289;
