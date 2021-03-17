import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval54(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 37.24 37.24" style={styles.oval}>
        <Path
          strokeWidth={0}
          fill="rgba(255,184,184,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M18.58 37.24 C28.86 37.22 37.22 28.86 37.24 18.58 C37.26 8.30 28.94 -0.02 18.66 0.00 C8.37 0.02 0.02 8.37 0.00 18.66 C-0.02 28.94 8.30 37.26 18.58 37.24 Z"
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
  oval: {
    height: 37,
    width: 37
  }
});

export default Oval54;
