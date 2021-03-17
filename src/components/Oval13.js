import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval13(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 111 45.51" style={styles.oval4}>
        <Path
          strokeWidth={0}
          fill="rgba(164,164,164,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M55.50 27.00 C57.99 27.00 60.00 24.99 60.00 22.50 C60.00 20.01 57.99 18.00 55.50 18.00 C53.01 18.00 51.00 20.01 51.00 22.50 C51.00 24.99 53.01 27.00 55.50 27.00 Z"
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
    height: 9,
    width: 9
  }
});

export default Oval13;
