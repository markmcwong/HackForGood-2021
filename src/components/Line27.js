import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Line27(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.5 -0.5 380 3" style={styles.line22}>
        <Path
          strokeWidth={1}
          fill="transparent"
          stroke="rgba(151,151,151,0.2027912273273601)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.50 L378.00 0.50 "
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
  line22: {
    height: 1,
    width: 378
  }
});

export default Line27;
