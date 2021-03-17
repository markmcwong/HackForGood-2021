import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function FloorInject62(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 342 110" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(240,240,240,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M171.00 110.00 C265.44 110.00 342.00 85.38 342.00 55.00 C342.00 24.62 265.44 0.00 171.00 0.00 C76.56 0.00 0.00 24.62 0.00 55.00 C0.00 85.38 76.56 110.00 171.00 110.00 Z"
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
  path: {
    height: 110,
    width: 342
  }
});

export default FloorInject62;
