import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path200(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 15.34 35.67" style={styles.path51}>
        <Path
          strokeWidth={0}
          fill="rgba(55,71,79,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M15.34 13.60 L11.06 3.42 C11.06 3.42 4.17 2.81 0.00 0.00 C0.00 0.00 2.86 3.95 9.19 5.26 L14.19 13.97 L14.62 35.67 L15.34 13.60 Z"
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
  path51: {
    height: 36,
    width: 15
  }
});

export default Path200;
