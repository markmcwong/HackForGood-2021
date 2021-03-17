import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval8(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 60 60" style={styles.oval}>
        <Path
          strokeWidth={0}
          fill="rgba(245,166,35,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M30.00 60.00 C46.57 60.00 60.00 46.57 60.00 30.00 C60.00 13.43 46.57 0.00 30.00 0.00 C13.43 0.00 0.00 13.43 0.00 30.00 C0.00 46.57 13.43 60.00 30.00 60.00 Z"
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
    height: 60,
    width: 60
  }
});

export default Oval8;
