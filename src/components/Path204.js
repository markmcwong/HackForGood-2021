import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path204(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 9.96 17.64" style={styles.path55}>
        <Path
          strokeWidth={0}
          fill="rgba(230,194,167,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 16.65 C2.56 18.03 5.39 17.91 8.43 16.65 L9.96 0.00 L0.00 1.32 Z"
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
  path55: {
    height: 18,
    width: 10
  }
});

export default Path204;
