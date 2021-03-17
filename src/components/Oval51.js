import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval51(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 46 46" style={styles.oval16}>
        <Path
          strokeWidth={0}
          fill="rgba(245,166,35,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M23.00 46.00 C35.70 46.00 46.00 35.70 46.00 23.00 C46.00 10.30 35.70 0.00 23.00 0.00 C10.30 0.00 0.00 10.30 0.00 23.00 C0.00 35.70 10.30 46.00 23.00 46.00 Z"
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
  oval16: {
    height: 46,
    width: 46
  }
});

export default Oval51;
