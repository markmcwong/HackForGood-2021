import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval14(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 111 45.51" style={styles.oval5}>
        <Path
          strokeWidth={0}
          fill="rgba(184,184,184,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M82.50 27.00 C84.99 27.00 87.00 24.99 87.00 22.50 C87.00 20.01 84.99 18.00 82.50 18.00 C80.01 18.00 78.00 20.01 78.00 22.50 C78.00 24.99 80.01 27.00 82.50 27.00 Z"
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
  oval5: {
    height: 9,
    width: 9
  }
});

export default Oval14;
