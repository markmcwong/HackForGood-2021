import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval25(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 16 17" style={styles.oval4}>
        <Path
          strokeWidth={0}
          fill="rgba(204,204,204,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M8.00 17.00 C12.42 17.00 16.00 13.19 16.00 8.50 C16.00 3.81 12.42 0.00 8.00 0.00 C3.58 0.00 0.00 3.81 0.00 8.50 C0.00 13.19 3.58 17.00 8.00 17.00 Z"
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
  oval4: {
    height: 17,
    width: 16
  }
});

export default Oval25;
