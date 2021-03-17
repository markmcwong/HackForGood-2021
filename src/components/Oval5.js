import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.52 -0.52 9.55 9.98" style={styles.oval3}>
        <Path
          strokeWidth={1.03030303030303}
          fill="rgba(27,193,46,1)"
          stroke="rgba(255,255,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M4.26 8.43 C6.33 8.43 8.00 6.66 8.00 4.47 C8.00 2.29 6.33 0.52 4.26 0.52 C2.19 0.52 0.52 2.29 0.52 4.47 C0.52 6.66 2.19 8.43 4.26 8.43 Z"
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
  oval3: {
    height: 8,
    width: 7
  }
});

export default Oval5;
