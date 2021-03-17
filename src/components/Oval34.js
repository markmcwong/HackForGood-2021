import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval34(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 3 3" style={styles.oval13}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M1.50 3.00 C2.33 3.00 3.00 2.33 3.00 1.50 C3.00 0.67 2.33 0.00 1.50 0.00 C0.67 0.00 0.00 0.67 0.00 1.50 C0.00 2.33 0.67 3.00 1.50 3.00 Z"
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
  oval13: {
    height: 3,
    width: 3
  }
});

export default Oval34;
